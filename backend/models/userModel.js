const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength:8},
    name: {type: String},
    lastName: {type: String},
    dni: {type: Number},
    address: {type: String},
    time: { type : Date, default: Date.now },
});

module.exports = User = mongoose.model("user", userSchema)