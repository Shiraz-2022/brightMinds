require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const FLASK_SERVER_URL = process.env.FLASK_SERVER_URL;

exports.getQuestion = async (req, res) => {
    try {
        const { data } = await axios.get(`${FLASK_SERVER_URL}/get-question`);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

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
        const response = await axios.post(`${FLASK_SERVER_URL}/process-audio`, form, {
            headers: {
                ...form.getHeaders(),
            },
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
};