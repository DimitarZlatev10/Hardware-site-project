const {
  register,
  getAllUsers,
  login,
  getUserDataByEmail,
} = require("../controller/user-controller");

const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/userData", getUserDataByEmail);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
