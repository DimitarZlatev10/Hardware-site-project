const { register, getAllUsers } = require("../controller/user-controller");

const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/register", register);

module.exports = router;
