import pandas as pd
import random

num_students = 1000  

data = {
    'parent_income': np.random.randint(20000, 200000, 5000),
    'assets': np.random.randint(1000, 200000, 5000),
    'family_size': np.random.randint(1, 10, 5000),
    'student_earnings': np.random.randint(0, 30000, 5000),
    'high_school_gpa': np.random.uniform(2.0, 4.0, 5000),
    'college_savings': np.random.randint(0, 100000, 5000),
    'loan_debt': np.random.randint(0, 50000, 5000),
    'extracurriculars': np.random.randint(0, 10, 5000),
    'volunteer_hours': np.random.randint(0, 500, 5000),
    'aid_amount': np.random.randint(1000, 50000, 5000)
}

# Convert to a DataFrame
df = pd.DataFrame(data)

# Save as CSV
df.to_csv("college_financial_aid.csv", index=False)

print("Dataset generated and saved as 'financial_aid.csv'!")
