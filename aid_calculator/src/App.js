import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [formData, setFormData] = useState({
    parentIncome: "",
    assets: "",
    familySize: "",
    educationLevel: "",
    parentEmployment: "",
    loanHistory: "",
    otherAidReceived: "",
    gpa: "",
    extracurriculars: "",
    specialCircumstances: "",
  });

  const [aidAmount, setAidAmount] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((val) => val.trim() === "")) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        parent_income: parseFloat(formData.parentIncome),
        assets: parseFloat(formData.assets),
        family_size: parseInt(formData.familySize),
      });

      setAidAmount(response.data.aid_amount);
    } catch (error) {
      console.error("Error predicting aid amount:", error);
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-4 max-w-lg w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          College Financial Aid Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { name: "parentIncome", label: "Parent Income (in thousands)" },
            { name: "assets", label: "Assets (in thousands)" },
            { name: "familySize", label: "Family Size" },
            { name: "educationLevel", label: "Student’s Education Level" },
            { name: "parentEmployment", label: "Parent Employment Status" },
            { name: "loanHistory", label: "Previous Loan History" },
            { name: "otherAidReceived", label: "Other Aid Received" },
            { name: "gpa", label: "Student’s GPA" },
            { name: "extracurriculars", label: "Extracurricular Activities" },
            { name: "specialCircumstances", label: "Special Circumstances" },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700">{field.label}:</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
              />
            </motion.div>
          ))}

          {error && (
            <motion.div
              className="text-red-600 text-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Loading..." : "Predict Aid Amount"}
          </motion.button>
        </form>

        {aidAmount !== null && (
          <motion.div
            className="mt-4 text-center bg-gray-100 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-gray-800">Predicted Aid Amount:</h2>
            <p className="text-2xl font-bold text-gray-900">${aidAmount.toFixed(2)}k</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;