import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib


data = pd.read_csv("financial_aid.csv")

X = data[["parent_income", "assets", "family_size"]]
y = data["aid_amount"]


model = LinearRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, "financial_aid_model.pkl")
print("Model trained and saved!")