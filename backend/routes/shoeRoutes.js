const router = require("express").Router();
const shoeModel = require("../models/shoemodel");

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newshoe = new shoeModel(data);
    await newshoe.save().then(() => {
      res.status(200).json({ message: "Shoe added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getshoe", async (req, res) => {
  let shoes;
  try {
    shoes = await shoeModel.find();
    res.status(200).json({ shoes });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getshoe/:id", async (req, res) => {
  let shoe;
  const id = req.params.id;
  try {
    shoe = await shoeModel.findById(id);
    res.status(200).json({ shoe });
  } catch (error) {
    console.log(error);
  }
});

router.put("/updateshoe/:id", async (req, res) => {
  const id = req.params.id;
  const { shoename, description, company, image, price } = req.body;
  let shoe;
  try {
    shoe = await shoeModel.findByIdAndUpdate(id, {
      shoename,
      description,
      company,
      image,
      price,
    });
    shoe = await shoe.save().then(() => res.json({ shoe }));
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteshoe/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await shoeModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Deleted Successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
