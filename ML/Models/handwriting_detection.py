import re
import cv2
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

def preprocess_text(extracted_text):
    clean_text = extracted_text.strip()
    clean_text = re.sub(r'\n+', ' ', clean_text)  # Replace multiple newlines with space
    clean_text = re.sub(r'\s{2,}', ' ', clean_text)  # Replace multiple spaces with a single space

    # Correct common OCR mistakes (customize as needed)
    clean_text = clean_text.replace("1", "l")  # Replace '1' with 'l' if OCR misreads
    clean_text = clean_text.replace("0", "O")  # Replace '0' with 'O'
    return clean_text

def main(image_path):
    extracted_text = extract_handwriting(image_path)
    final_text = preprocess_text(extracted_text)
    print("Extracted Handwriting Text:\n", final_text)

# Example usage
if __name__ == "__main__":
    main("D:\\Sample Projects\\brightMinds\\ML\\Models\\metadata\\Image4.jpg")

