const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../controller/products-controller");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/createProduct", createProduct);

module.exports = router;
