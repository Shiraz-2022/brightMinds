from flask import Flask, request, jsonify
from .tts import synthesize_text

app = Flask(__name__)

@app.route('/synthesize', methods=['POST'])
def synthesize():
    text = request.json.get('text', '')
    if text:
        synthesize_text(text)
        return jsonify({'message': 'Text has been synthesized and saved as audio.'}), 200
    else:
        return jsonify({'error': 'No text provided'}), 400

@app.route('/')
def index():
    document = collection.find_one()
    return str(document)