const router = require("express").Router();
const User = require('../models/userModel')

router.get("/", (req,res)=>{
    User.find((err, users)=>{
        if(err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

router.post("/create", (req, res) => {
    const user = new User(req.body);
    user
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });

router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
        res.json(user);
    });
});
  
router.post("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
        if (!user) {
        res.status(404).send("Todo not found");
        } else {
            user.name = req.body.name;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.password = req.body.password;
            user.dni = req.body.dni;
            user.address = req.body.address;

            user
                .save()
                .then((user) => {
                res.json(user);
                })
                .catch((err) => res.status(500).send(err.message));
        }
    });
});

module.exports = router;