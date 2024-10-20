const express = require("express");
const router = express.Router();
const {
  getDyslexiaTips,
  chatWithLLM,
} = require("../../controller/parents/parentController");

// Route to get dyslexia tips
router.get("/dyslexia-tips", getDyslexiaTips);
router.post("/dyslexia-tips", chatWithLLM);

module.exports = router;
