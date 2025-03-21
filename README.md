# Aid Calculator

## Overview

Aid Calculator is a web application designed to help users calculate aid-related values efficiently. The frontend is built using **React.js**, while the backend is powered by **Flask** in Python.

## Features

- **User-friendly interface** powered by React.
- **Backend API** built with Flask to handle calculations.
- **CORS support** for seamless frontend-backend communication.
- **TailwindCSS** for styling.

## Tech Stack

### Frontend:

- React.js
- Axios
- TailwindCSS

### Backend:

- Python (Flask)
- Flask-CORS

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** & **npm**
- **Python 3** & **pip**

### Installation

#### Clone the repository:

```bash
git clone https://github.com/your-repo/aid_calculator.git
cd aid_calculator
```

### Frontend Setup

```bash
cd frontend  # Navigate to frontend folder
npm install  # Install dependencies
npm start    # Start the React app
```

### Backend Setup

```bash
cd backend   # Navigate to backend folder
pip install -r requirements.txt  # Install Python dependencies
python3 app.py  # Start the Flask server
```

### API Endpoints

- `POST /calculate-aid`: Accepts input data and returns aid calculation results.

### Folder Structure

```
Aid_Calculator/
│── frontend/  # React app
│── backend/   # Flask API
│── README.md
```

## Troubleshooting

- If `react-scripts: Permission denied`, run:
  ```bash
  chmod +x node_modules/.bin/react-scripts
  npm start
  ```
- If `ModuleNotFoundError: No module named 'flask_cors'`, install it:
  ```bash
  pip install flask_cors
  ```

## License

This project is licensed under [MIT License](LICENSE).

## Author

Developed mucyo44 

