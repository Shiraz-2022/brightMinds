import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
import keras
# from tensorflow.keras import layers
from sklearn.metrics import mean_absolute_error, mean_squared_error
import joblib


# Step 1: Load the dataset
dataset = pd.read_csv('/content/mastery_pred_dataset.csv')

# Step 2: Preprocess the dataset
dataset['Accuracy (%)'] /= 100
read_type_map = {topic: f'R{index + 1}' for index, topic in enumerate(dataset['Topic'].unique())}
dataset = dataset.rename(columns={'Accuracy (%)': 'Accuracy'})
dataset['Topic'] = dataset['Topic'].map(read_type_map)

dataset

X = dataset[['Age', 'Topic', 'Difficulty', 'Accuracy', 'Number of Questions', 'Previous Mastery Score']]
y = dataset['New Mastery Score']

ct = ColumnTransformer(
    transformers=[
        ('topic', OneHotEncoder(sparse_output=False), ['Topic'])
    ],
    remainder='passthrough'
)

X_transformed = pd.DataFrame(ct.fit_transform(X), columns=ct.get_feature_names_out(), index=X.index)

X_transformed

# Step 4: Split the dataset into training, validation, and testing sets
X_train, X_temp, y_train, y_temp = train_test_split(X_transformed, y, test_size=0.2, random_state=42)

# Further split the temporary set into validation and test sets (50% of the temp set each)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.3, random_state=42)

# Step 5: Build the Neural Network Model
model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    layers.Dense(64, activation='relu'),
    layers.Dense(32, activation='relu'),
    layers.Dense(1)  # Assuming New Mastery Score is a continuous value
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mse'])

model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_val, y_val))

# Step 7: Save the model
model.save('mastery_model.keras')  # Save the Keras model
joblib.dump(ct, 'column_transformer.pkl')  # Save the ColumnTransformer

# Step 8: Evaluate the model on the test set
y_pred = model.predict(X_test)

# Calculate metrics
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print("Test Set Evaluation Metrics:")
print(f"Mean Absolute Error (MAE): {mae:.4f}")
print(f"Mean Squared Error (MSE): {mse:.4f}")