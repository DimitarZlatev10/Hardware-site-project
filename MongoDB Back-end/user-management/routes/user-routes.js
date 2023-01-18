const {
  register,
  getAllUsers,
  login,
  getUserDataByEmail,
  getUserFavourites,
} = require("../controller/user-controller");

const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/userData", getUserDataByEmail);
router.post("/getUserFavourites", getUserFavourites);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
