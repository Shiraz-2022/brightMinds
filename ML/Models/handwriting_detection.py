import re
import cv2
import numpy as np
from google.cloud import vision
import io

def extract_handwriting(image_path):
    client = vision.ImageAnnotatorClient.from_service_account_json('../VisionKey.json')
    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations

    if response.error.message:
        raise Exception(f'{response.error.message}')
    return texts[0].description if texts else "No handwriting detected"


"""---------------------"""

def preprocess_text(extracted_text):
    clean_text = extracted_text.strip()
    clean_text = re.sub(r'\n+', ' ', clean_text)  # Replace multiple newlines with space
    clean_text = re.sub(r'\s{2,}', ' ', clean_text)  # Replace multiple spaces with a single space

    # Correct common OCR mistakes (customize as needed)
    clean_text = clean_text.replace("1", "l")  # Replace '1' with 'l' if OCR misreads
    clean_text = clean_text.replace("0", "O")  # Replace '0' with 'O'
    return clean_text


"""---------------------"""

def letter_check(input_text, expected_text):
    return int(input_text == expected_text)

"""---------------------"""

def levenshtein_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
    return int(dp[m][n])


def word_check(input_text, expected_text):
    dist = levenshtein_distance(input_text, expected_text)
    accuracy =  1 - dist / max(len(input_text), len(expected_text))
    return accuracy if accuracy > 0.5 else 0


def sentence_check(input_text, expected_text):
    s1 = input_text.split()
    s2 = expected_text.split()

    X = sum(word_check(a, b) for a, b in zip(s1, s2))
    return X / max(len(s1), len(s2))

"""---------------------"""

function_map = {0: lambda x, y: letter_check(x, y),
                1: lambda x, y: word_check(x, y),
                2: lambda x, y: sentence_check(x, y)
                }

def main(image_path, expected_text, option):
    extracted_text = extract_handwriting(image_path)
    final_text = preprocess_text(extracted_text)

    accuracy = function_map[option](final_text, expected_text)
    print(f'The accuracy is {accuracy}')

    print("Extracted Handwriting Text:\n", final_text)
    return final_text

"""---------------------"""


if __name__ == "__main__":
    option = int(input('Select the type of question:'))
    expected_text = input('Enter the text:')
    image_path = "D:\\Sample Projects\\brightMinds\\ML\\Models\\metadata\\sentence.jpg"
    main(image_path, expected_text, option)

