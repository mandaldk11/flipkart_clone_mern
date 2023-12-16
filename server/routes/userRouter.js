const router = require("express").Router();
const {
  register,
  allUsers,
  loginUser,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", loginUser);

router.get("/allUsers", allUsers);

module.exports = router;
