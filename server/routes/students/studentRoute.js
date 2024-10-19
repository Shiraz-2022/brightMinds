const express = require('express');
const router = express.Router();
const studentController = require('../../controller/students/studentController');

router.get('/question', studentController.getQuestion); // questions fetchign to show for the test
router.post('/question', studentController.submitQuestion);


router.post('/audio', studentController.getAudioAnswer);
module.exports = router;