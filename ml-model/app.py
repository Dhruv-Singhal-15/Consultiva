from flask import Flask, request, jsonify
import joblib
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

model = joblib.load('./model.joblib')
label_encoder = LabelEncoder()

# Define the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    
    try:
        data = request.get_json()
        input_data = data['input']  # Adjust 'input' based on your frontend data format ( assuming data is {input:[,,...]} )
        
        prediction = model.predict([input_data])[0]

        predicted_disease = label_encoder.inverse_transform([prediction])[0]

        response = {
            "predicted_disease": predicted_disease
        }

        return jsonify(response),200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
