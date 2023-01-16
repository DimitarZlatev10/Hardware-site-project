const {
  createProduct,
  getAllProducts,
  getProductById,
  addToFavourites,
  removeFromFavourites,
} = require("../controller/products-controller");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/createProduct", createProduct);
router.post("/addToFavourites", addToFavourites);
router.post("/removeFromFavourites", removeFromFavourites);

module.exports = router;
