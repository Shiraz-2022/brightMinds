require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const FLASK_SERVER_URL = process.env.FLASK_SERVER_URL;



exports.submitQuestion = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let sampleFile = req.files.sampleFile;

    const form = new FormData();
    form.append('file', fs.createReadStream(sampleFile.tempFilePath));

    try {
        const response = await axios.post(`${FLASK_SERVER_URL}/submit-question`, form, {
            headers: {
                ...form.getHeaders(),
            },
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
};


exports.getAudioAnswer = async (req, res) => {
    if (!req.files || !req.files.audioFile || req.files.audioFile.mimetype !== 'audio/wav') {
        return res.status(400).send('No audio file was uploaded or the file is not in WAV format.');
    }

    let audioFile = req.files.audioFile;

    const form = new FormData();
    form.append('audio', fs.createReadStream(audioFile.tempFilePath));

    try {
        const googleResponse = await axios.post(`https://api.google.com/some-audio-processing-endpoint`, form, {
            headers: {
                ...form.getHeaders(),
            },
        });
        if (googleResponse.data.correct) {
            res.json({ success: true, message: 'Correct answer!' });
        } else {
            res.json({ success: false, message: 'Wrong answer, try again!' });
        }
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

exports.getQuestion = async (req, res) => {
    res.json({
        "questions": [
            {
                "letter": "b",
                "question_type": "single_letter",
                "prompt": "Identify the letter shown on the screen.",
                "correct_answer": "b",
                "feedback": {
                    "correct": "Great job! You identified the letter 'b'.",
                    "incorrect": "Oops! That’s the letter 'b'. Let's try again."
                }
            },
            {
                "task_type": "paragraph_pronunciation",
                "difficulty_levels": {
                    "easy": {
                        "questions": [
                            {
                                "paragraph": "The cat and dog played in the sun. A bat flew nearby.",
                                "question_type": "paragraph",
                                "prompt": "Read this paragraph out loud:",
                                "correct_answer": "The cat and dog played in the sun. A bat flew nearby.",
                                "feedback": {
                                    "correct": "Excellent job! You read the paragraph clearly.",
                                    "incorrect": "Let's try reading this paragraph again. Take your time with each word."
                                }
                            }
                        ]
                    }
                }
            },
            {
                "id": "e1",
                "passage_type": "comprehension",
                "text": "Sam has a cat. The cat is red. It likes to nap in the sun. Sam pets the cat. The cat purrs.",
                "font_size": "18px",
                "line_spacing": "2.5",
                "question": "What color is the cat?",
                "options": ["Red", "Blue", "Black", "White"],
                "correct_answer": "Red",
                "word_count": 21,
                "readability_score": "1.2",
                "feedback": {
                    "correct": "Great job! The cat is indeed red.",
                    "incorrect": "Let's try again. Look for the color word in the story."
                },
                "accommodations": {
                    "text_display": "OpenDyslexic font",
                    "background_color": "#F8F4E9",
                    "word_spacing": "1.5em"
                }
            }
        ]
    });
};