const router = require("express").Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

router.post("/create", async (req, res) => {
      try {
        let { email, password, name, lastName, dni, address } = req.body;
    
        // validate
    
        if (!email || !password || !name || !lastName || !dni || !address)
          return res.status(400).json({ msg: "Not all fields have been entered." });
        if (password.length < 8)
          return res
            .status(400)
            .json({ msg: "The password needs to be at least 8 characters long." });
    
        const existingUser = await User.findOne({ email: email });
        if (existingUser)
          return res
            .status(400)
            .json({ msg: "An account with this email already exists." });
    
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new User({
          email,
          password: passwordHash,
          name,
          lastName,
          dni,
          address
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  });

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
      if (!email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });
  
      const user = await User.findOne({ email: email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "No account with this email has been registered." });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ msg: "No user was found" });
        res.send(user)
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
});
  
router.post("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ msg: "No user was found" });

        user.name = req.body.name;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.dni = req.body.dni;
        user.address = req.body.address;

        const updatedUser = await res.user.save();
        res.json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ msg: "No user was found" });
        const deletedUser = await user.remove();
        res.status(201).json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;