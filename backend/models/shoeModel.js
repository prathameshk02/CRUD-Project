const mongoose = require("mongoose");
const shoeschema = mongoose.Schema({
  shoename: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = new mongoose.model("shoes", shoeschema);
