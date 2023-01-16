const {
  createProduct,
  getAllProducts,
  getProductById,
  addToFavourites,
  removeFromFavourites,
  addToCart,
  removeFromCart,
} = require("../controller/products-controller");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/createProduct", createProduct);
router.post("/addToFavourites", addToFavourites);
router.post("/removeFromFavourites", removeFromFavourites);
router.post("/addToCart", addToCart);
router.post("/removeFromCart", removeFromCart);

module.exports = router;
