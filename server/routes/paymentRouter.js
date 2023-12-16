const router = require("express").Router();
const {
  checkout,
  paymentVerification,
  getKey,
} = require("../controllers/paymentController");

router.post("/checkout", checkout);
router.post("/paymentVerification", paymentVerification);
router.get("/getkey", getKey);

module.exports = router;
