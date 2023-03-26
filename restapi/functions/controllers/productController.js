const firebase = require("../db");
const Product = require("../models/product");

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;
    await firebase.collection("products").doc().set(data);
    res.status(201).json({message: "Record saved successfully"});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await firebase.collection("products");
    const data = await products.get();
    const arr = [];
    if (data.empty) {
      res.status(200).json({message: "No records found"});
    } else {
      let total = 0;
      data.forEach((item) => {
        const product = new Product(
            item.data().name,
            item.data().manufacture,
            item.data().epa,
            item.data().level,
            item.data().activeIngredients,
            item.data().concentrations,
            item.data().isBookMarked);
        arr.push(product);
        total = total +1;
      });
      res.status(200).json({listing: arr, count: total});
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = {
  addProduct,
  getAllProducts,
};

