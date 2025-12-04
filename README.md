# 🧠 **Sales_Forecasting_and_Analytics – AI-Powered Retail Sales Forecasting Platform**

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-orange?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)
![Pandas](https://img.shields.io/badge/Pandas-DataFrame-yellow?logo=pandas)
![CatBoost](https://img.shields.io/badge/CatBoost-GradientBoosting-orange)
![XGBoost](https://img.shields.io/badge/XGBoost-Regression-red)
![MLflow](https://img.shields.io/badge/MLflow-Tracking-blue?logo=mlflow)
![Dash](https://img.shields.io/badge/Dash-Analytics-black?logo=plotly)
![Plotly](https://img.shields.io/badge/Plotly-Visualizations-3f4f75?logo=plotly)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-ML-orange?logo=scikit-learn)
![DVC](https://img.shields.io/badge/DVC-Data%20Versioning-purple?logo=dvc)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

**Sales_Forecasting_and_Analytics** is a modern, full-stack retail forecasting ecosystem that helps stores **predict demand, optimize inventory, and reduce waste** using state-of-the-art ML models and interactive dashboards.
Built for real-world retail datasets, the platform integrates **Next.js UI**, **MLflow tracking**, **Dash analytics**, and **CatBoost/XGBoost pipelines** to deliver powerful insights effortlessly.

---

# 🚀 **Project Structure**

```
Sales/
│── Sales_app/           # Next.js 13 web app (UI, components, pages)
│   ├── components/           # Navbar, Footer, ResultDisplay, etc.
│   ├── app/                  # Routes (home, sections, API handlers)
│   ├── styles/               # Global Tailwind styles
│   └── public/               # Assets & media
│
│── data/                     # Raw, processed, DVC-tracked datasets
│── models/                   # Trained models, artifacts, joblib exports
│── pipelines/                # Training scripts (Python)
│── Dashboard.py              # Plotly Dash analytics dashboard
│── train.py                  # Full training workflow (CatBoost/XGBoost)
│── mlflow/                   # MLflow tracking metadata
│── requirements.txt          # Python dependencies
│── dvc.yaml                  # DVC pipeline definitions
│── README.md                 # Documentation
```

---

# ✨ **Key Features**

### 🔮 **AI Forecasting Engine**

* XGBoost & CatBoost regression models
* Time-series + cyclic feature engineering
* Multi-year retail sales analysis
* Daily SKU-level predictions

### 📊 **Interactive Analytics**

* Dash + Plotly dashboards
* MLflow experiment tracking
* Store-level and category-level insights

### 🌐 **Modern Web App**

* Next.js 13 App Router
* Beautiful TailwindCSS UI
* Real-time forecast interface
* Mobile responsive

### ⚙️ **Engineering Excellence**

* DVC-powered dataset versioning
* Modular pipelines for reproducibility
* Clean TypeScript frontend
* Joblib-based model persistence

---

# 🌍 **Live Modules Overview**

| Module                 | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| 🧠 **Model Training**  | CatBoost/XGBoost forecasting pipeline with MLflow logging |
| 📊 **Dash Analytics**  | Interactive charts, feature importance, sales trends      |
| 🌐 **Web App**         | Forecast UI built with Next.js + Tailwind                 |
| ⚙️ **MLflow Tracking** | Complete experiment lifecycle & metrics                   |

---

# 🧰 **Tech Stack**

| Tool                 | Purpose                            |
| -------------------- | ---------------------------------- |
| **Python**           | Backend + ML pipeline              |
| **Pandas/Numpy**     | Feature engineering, preprocessing |
| **CatBoost/XGBoost** | Core forecasting models            |
| **Scikit-learn**     | Metrics + modeling utilities       |
| **Next.js**          | Web app UI                         |
| **Tailwind CSS**     | Styling                            |
| **TypeScript**       | Type-safe frontend                 |
| **MLflow**           | Experiment tracking                |
| **Plotly/Dash**      | Analytics dashboards               |
| **DVC**              | Data and pipeline versioning       |

---

# ⚙️ **How It Works**

### **1️⃣ Data Engineering**

* Missing value imputation
* Time features (day, month, year, week)
* Cyclical encoding (`sin/cos`)
* One-hot encoding

### **2️⃣ Model Training**

* Year-based train-validation split
* CatBoost/XGBoost tuned hyperparameters
* Metrics: RMSE, MAE, R², RMSLE

### **3️⃣ Pipeline & Versioning**

* DVC manages data → features → model → evaluation
* MLflow logs metrics + artifacts

### **4️⃣ Web App + Dashboards**

* Next.js UI for predictions
* Dash for advanced analytics
* REST API for model serving

---

# ⚙️ **Installation & Setup**

## 🐍 Backend / ML Pipeline

Clone repository:

```bash
git clone https://github.com/roshankahaneDSAI/Sales_Forecasting_and_Analytics.git
cd Sales_app
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Run model dashboard:

```bash
python Dashboard.py
```

---

## 🌐 Frontend (Next.js App)

Navigate to app folder:

```bash
cd Sales_app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Runs at: **[http://localhost:3000](http://localhost:3000)**

---

# 📷 **Screenshots**

### 🌐 **Website (Next.js UI)**

![Screenshot 2025-06-28 002921](https://github.com/user-attachments/assets/1f98cc93-d607-4d8f-90b9-79cbda3441bf)
![Screenshot 2025-06-28 003031](https://github.com/user-attachments/assets/568e52cc-f822-4f79-9e01-53b3b5bf717d)
![Screenshot 2025-06-28 003044](https://github.com/user-attachments/assets/6d985386-f49c-4ac1-8dc9-5e59a0dc4007)

---

### 📊 **MLflow Dashboard**

![Screenshot 2025-06-28 003148](https://github.com/user-attachments/assets/15b16652-1b67-4bea-8a1a-9af97d5376f3)

---

### 📈 **Dash Analytics Panel**

![Screenshot 2025-06-27 220938](https://github.com/user-attachments/assets/87aa8c83-0ff5-4834-9e2f-c223743df052)
![Screenshot 2025-06-27 220910](https://github.com/user-attachments/assets/3afa1410-3548-408b-9e1f-f64049d20ee9)

---

# 📜 License

This project is released under the **MIT License**.
See the full license in the `LICENSE` file.

---

# ❤️ **Made With Passion**

Created by **Roshan Kahane**
🔥 Data Scientist & Generative AI Engineer
🔗 [LinkedIn](https://www.linkedin.com/in/roshan-kahane-347550398/)

---
