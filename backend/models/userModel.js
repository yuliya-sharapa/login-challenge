const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength:8},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    dni: {type: String, required: true},
    address: {type: String, required: true},
    time: { type : Date, default: Date.now },
});

module.exports = User = mongoose.model("user", userSchema)