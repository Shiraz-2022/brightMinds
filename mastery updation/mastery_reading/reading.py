import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
import keras
import joblib



# Function to load the model and predict the new mastery score

# Returns the new writing mastery score

def predict_new_mastery(new_data):
    read_type_map = {'Letter Reading': 'R1', 'Word Reading': 'R2', 'Short Passage Reading': 'R3', 'Passage Comprehension': 'R4', 'Noun Classification': 'R5'}

    loaded_model = keras.models.load_model('mastery_model.h5')
    loaded_ct = joblib.load('column_transformer.pkl')

    # Convert new data to DataFrame
    input_df = pd.DataFrame(new_data)

    # Map Topic to unique identifiers
    input_df['Topic'] = input_df['Topic'].map(read_type_map)

    # Transform input data
    X_input = input_df[['Age', 'Topic', 'Difficulty', 'Accuracy', 'Number of Questions', 'Previous Mastery Score']]
    X_input_transformed = pd.DataFrame(loaded_ct.transform(X_input), columns=loaded_ct.get_feature_names_out(), index=X_input.index)

    # Generate predictions
    predictions = loaded_model.predict(X_input_transformed)

    return predictions[0][0] if (predictions[0][0] <= 1) else 1.0












'''# Step 9: Prepare input data for prediction
# new_data = {
#     'Age': [10],
#     'Topic': ['Passage Comprehension'],  # Example topic
#     'Difficulty': [2],  # Example difficulty
#     'Accuracy': [0.25],  # Example accuracy
#     'Number of Questions': [5],  # Example number of questions
#     'Previous Mastery Score': [0.75]  # Example previous mastery score
# }

# # Get the prediction
# predicted_score = predict_new_mastery(new_data)
# print("Predicted New Mastery Score:", predicted_score)'''