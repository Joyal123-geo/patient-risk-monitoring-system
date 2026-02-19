# Patient Risk Monitoring System 🏥

A Machine Learning-powered web application designed to predict patient mortality risk and monitor clinical parameters. This tool helps healthcare professionals identify high-risk patients by analyzing vital signs, age, and Glasgow Coma Scale (GCS) scores.

## 🚀 Overview
This project uses a Random Forest Classifier (or your specific model) trained on clinical datasets to provide real-time risk assessment. The interface is built with **Streamlit** for a seamless, interactive user experience.

## ✨ Features
- **Mortality Prediction:** Predicts the probability of patient mortality based on clinical inputs.
- **Interactive Dashboard:** Easy-to-use sliders and input fields for real-time analysis.
- **Visual Analytics:** Correlation maps and feature importance plots to understand risk factors.
- **Data-Driven Insights:** Uses historical patient data to identify trends in heart rate, temperature, and GCS.

## 🛠️ Tech Stack
- **Language:** Python 3.x
- **Frontend:** Streamlit
- **Machine Learning:** Scikit-learn, Pandas, NumPy
- **Visualization:** Matplotlib, Seaborn
- **Deployment:** GitHub / Streamlit Share

## 📁 Project Structure
```text
├── dataset/                # Raw and processed patient data
├── models/                 # Pre-trained .pkl models
├── notebooks/              # Jupyter notebooks for EDA and training
├── app.py                  # Main Streamlit application script
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation
