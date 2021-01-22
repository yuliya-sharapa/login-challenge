const router = require("express").Router();
const User = require('../models/userModel');
const auth = require("../middleware/auth")
const jwt = require("jsonwebtoken");


router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    email: user.email
  });
});
  

router.post("/tokenIsValid", async (req, res) => {
    try {
      console.log(req.header)
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
  
      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }); 



module.exports = router;