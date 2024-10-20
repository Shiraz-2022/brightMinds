const express = require("express");
const { testDataPush } = require("../controller/testData/testData");
const router = express.Router();
// questions fetchign to show for the test
router.post("/", testDataPush);

module.exports = router;
