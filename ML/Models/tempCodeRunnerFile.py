new_data = {
    'Age': [10],
    'Topic': ['Passage Comprehension'],  # Example topic
    'Difficulty': [2],  # Example difficulty
    'Accuracy': [0.25],  # Example accuracy
    'Number of Questions': [5],  # Example number of questions
    'Previous Mastery Score': [0.75]  # Example previous mastery score
}

# Get the prediction
predicted_score = predict_new_mastery(new_data)
print("Predicted New Mastery Score:", predicted_score)