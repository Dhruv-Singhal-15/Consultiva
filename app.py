from flask import Flask, render_template, request, redirect, jsonify, url_for
from sklearn.preprocessing import LabelEncoder
import joblib
import numpy as np

app = Flask(__name__)

# Load the pre-trained machine learning model
model = joblib.load('minor_project.pkl')

label_encoder = LabelEncoder()
# Assuming you have a list of labels, replace ['label1', 'label2', ...] with your actual labels
labels = ['Fungal_infection','Allergy','GERD','Chronic_cholestasis','Drug_Reaction','Peptic_ulcer_disease','AIDS','Diabetes','Gastroenteritis','Bronchial_Asthma','Hypertension','Migraine','Cervical_spondylosis','Paralysis(brain_hemorrhage)','Jaundice','Malaria','Chicken_pox','Dengue','Typhoid','Hepatitis_A','Hepatitis_B','Hepatitis_C','Hepatitis_D','Hepatitis_E','Alcoholic_hepatitis','Tuberculosis','Common_Cold','Pneumonia','Dimorphic_hemmorhoids(piles)','Heart_attack','Varicose_veins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis','Arthritis','(vertigo)Paroymsal_Positional_Vertigo','Acne','Urinary_tract_infection','Psoriasis','Impetigo']
label_encoder.fit(labels)

@app.route('/')
def index():
    return render_template('index_form.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the request
    input_data = request.json.get('input_data')

    # Convert the input_data list to a numpy array
    input_array = np.array(input_data).reshape(1, -1)

    # Make a prediction using the loaded model
    prediction = model.predict(input_array)

    # Convert the prediction to a human-readable label
    predicted_prognosis = label_encoder.inverse_transform(prediction)[0]

    # Return the prediction as JSON
    return redirect(url_for('show_result', result=predicted_prognosis))

@app.route('/result/<result>')
def show_result(result):
    # Render the result.html template with the provided result
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
