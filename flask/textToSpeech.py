import os
from google.cloud import texttospeech
from pydub import AudioSegment

# Set the environment variable for the Google Cloud service account credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "E:\\HackathonMFH\\TTS.json"

def synthesize_text(text):
    client = texttospeech.TextToSpeechClient()
    synthesis_input = texttospeech.SynthesisInput(text=text)
    voice = texttospeech.VoiceSelectionParams(
        language_code='en-US',
        name='en-US-Wavenet-C',
        ssml_gender=texttospeech.SsmlVoiceGender.FEMALE
    )
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)
    response = client.synthesize_speech(input=synthesis_input, voice=voice, audio_config=audio_config)
    mp3_file_path = 'response.mp3'
    with open(mp3_file_path, 'wb') as out:
        out.write(response.audio_content)
        print('Audio content written to file "response.mp3"')
    convert_mp3_to_wav(mp3_file_path)

def convert_mp3_to_wav(mp3_file_path):
    wav_file_path = mp3_file_path.replace('.mp3', '.wav')
    audio = AudioSegment.from_mp3(mp3_file_path)
    audio.export(wav_file_path, format='wav')
    print(f'Audio content converted to WAV and saved as "{wav_file_path}"')