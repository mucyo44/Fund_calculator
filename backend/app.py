from flask import Flask, request, jsonify
from flask_cors import CORS  
import joblib
import numpy as np  

app = Flask(__name__)
CORS(app)  


model = joblib.load("financial_aid_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get data from the request
        data = request.get_json()
        parent_income = float(data["parent_income"])
        assets = float(data["assets"])
        family_size = int(data["family_size"])

        # Make a prediction
        prediction = model.predict(np.array([[parent_income, assets, family_size]]))

        return jsonify({"aid_amount": float(prediction[0])})

    except Exception as e:
        print("Error:", str(e))  
        return jsonify({"error": str(e)}), 500  

if __name__ == "__main__":
    app.run(debug=True)
