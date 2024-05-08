const express = require("express");
const app = express();
const shoeRoutes = require("./routes/shoeRoutes");
require("./connection/conn");

app.use(express.json());
app.use("/api/v1", shoeRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
