const mongoose = require("mongoose");
//creating new schema for a user credentials
const Userschema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const usermodel = mongoose.model("userdetails", Userschema);

module.exports = usermodel;
