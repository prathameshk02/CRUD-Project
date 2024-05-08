const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://prathamesh:123abc@cluster.q0ikiul.mongodb.net/")
  .then(() => console.log("Connected"));
