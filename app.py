from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the pre-trained machine learning model
model = joblib.load('minor_project.pkl')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the request
    input_data = request.json.get('input_data')

    # Convert the input_data list to a numpy array
    input_array = np.array(input_data).reshape(1, -1)

    # Make a prediction using the loaded model
    prediction = model.predict(input_array)

    # Convert the prediction to a human-readable label
    predicted_prognosis = prediction[0]

    # Return the prediction as JSON
    return jsonify({'predicted_prognosis': predicted_prognosis})

if __name__ == '__main__':
    app.run(debug=True)
