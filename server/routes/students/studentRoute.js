const express = require('express');
const router = express.Router();
const studentController = require('../../controller/students/studentController');

router.get('/question', studentController.getQuestion);
router.post('/question', studentController.submitQuestion);
router.post('/report', studentController.report);

router.post('/audio', studentController.getAudioAnswer);
module.exports = router;