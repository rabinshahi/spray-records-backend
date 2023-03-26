const routers = require("express").Router();

const {
  addProduct,
  getAllProducts} = require("../controllers/productController");

routers.post("/product", addProduct);
routers.get("/products", getAllProducts);

module.exports = {
  routers: routers,
};
