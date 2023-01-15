const {
  createProduct,
  getAllProducts,
} = require("../controller/products-controller");

const router = require("express").Router();

router.get("/", getAllProducts);

router.post("/createProduct", createProduct);

module.exports = router;
