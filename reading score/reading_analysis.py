import os
import librosa
import numpy as np
from fastdtw import fastdtw
from google.cloud import texttospeech
from pydub import AudioSegment
from scipy.spatial.distance import euclidean
from sklearn.metrics.pairwise import cosine_similarity


os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "D:\\Sample Projects\\brightMinds\\ML\\TTS.json"


# Audio path for the test word
audio1_path = "D:\\Sample Projects\\brightMinds\\ML\\Models\\metadata\\test_word.wav"

# Path where the user recording has to be stored
audio2_path = "D:\\Sample Projects\\brightMinds\\ML\\Models\\metadata\\user_word.wav"




def synthesize_text(text, output_wav_path=audio1_path):
    temp_mp3_path = 'D:\\Sample Projects\\brightMinds\\ML\\Models\\metadata\\output.mp3'
    client = texttospeech.TextToSpeechClient()

    # Set the text input to be synthesized
    synthesis_input = texttospeech.SynthesisInput(text=text)

    # Build the voice request, select the language and gender
    voice = texttospeech.VoiceSelectionParams(
        language_code='en-IN',  # Specify the language code
        name='en-IN-Wavenet-A',  # Use a WaveNet voice
        ssml_gender=texttospeech.SsmlVoiceGender.FEMALE  
    )

    # Select the type of audio encoding (MP3)
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3  
    )

    # Perform the text-to-speech request
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # Save the MP3 audio content to a temporary file

    with open(temp_mp3_path, 'wb') as out:
        out.write(response.audio_content)
        print(f'Audio content written to file {temp_mp3_path}')

    # Convert MP3 to WAV using pydub
    audio = AudioSegment.from_mp3(temp_mp3_path)
    audio.export(output_wav_path, format="wav")
    print(f'WAV file saved at {output_wav_path}')

    # Clean up temporary file
    os.remove(temp_mp3_path)



# This function has to be called 

# Returns the accuracy score in terms of cosine similarity
def compare_audio_similarity(text):

    # Convert text into test word audio
    synthesize_text(text)

    # Load the test and user word audio
    audio1, sr1 = librosa.load(audio1_path)
    audio2, sr2 = librosa.load(audio2_path)

    # Extract MFCC features from both audios
    mfcc1 = librosa.feature.mfcc(y=audio1, sr=sr1, n_mfcc=5, n_mels=100)  # Extract 13 MFCC coefficients for audio1
    mfcc2 = librosa.feature.mfcc(y=audio2, sr=sr2, n_mfcc=5, n_mels=100)  # Extract 13 MFCC coefficients for audio2

    max_len = max(mfcc1.shape[1], mfcc2.shape[1])

    # Pad the shorter MFCC array with zeros
    mfcc1_padded = np.pad(mfcc1, ((0, 0), (0, max_len - mfcc1.shape[1])), mode='constant')
    mfcc2_padded = np.pad(mfcc2, ((0, 0), (0, max_len - mfcc2.shape[1])), mode='constant')

    # Flatten the MFCC features and compute cosine similarity
    mfcc1_flat = mfcc1_padded.flatten()
    mfcc2_flat = mfcc2_padded.flatten()

    cosine_sim = cosine_similarity([mfcc1_flat], [mfcc2_flat])[0][0]
    return f"{cosine_sim:.4f}"

