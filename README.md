# ♻️ Waste Classification & Disposal Guide

## Presented By: **Team AIR 8**

### 🎓 Team Members
- **Abhisaar Ratha** (01119051923)
- **Yashwardhan Singh** (01219051923)
- **Ritvik Nelly** (01419051923)
- **Mohammad Liban Ansari** (01519051923)
- **Aryav Yadav** (01719051923)
- **Tejas Jain** (02619051923)
- **Raveesh Sehrawat** (02819051923)
- **Mohan Sahni** (03719051923)

**University School of Automation and Robotics, GGSIPU**

---

## 🌟 Project Overview

The **Waste Classification & Disposal Guide** is an AI-powered web application that helps users identify different types of waste materials and provides appropriate disposal recommendations. Using Google's Gemini AI, the system analyzes uploaded images of waste items and classifies them into specific categories with disposal guidance to promote environmental sustainability.

## Problem Statement

*"Every Waste Has Its Place"* - Our mission is to create a cleaner future by helping people properly sort and dispose of their waste through intelligent AI classification.

---

## 🚀 Features

### AI-Powered Classification
- **Advanced Image Recognition**: Uses Google Gemini 1.5 Flash model for accurate waste identification
- **11 Waste Categories**: Battery, Biological, Cardboard, Clothes, Glass, Metal, Paper, Plastic, Shoes, Trash, and Other
- **Confidence Scoring**: Provides confidence levels for predictions
- **Multiple Possibilities**: Shows probability distribution across all categories

### User-Friendly Interface
- **Drag & Drop Upload**: Intuitive file upload with drag-and-drop support
- **Live Image Preview**: Shows selected image before analysis
- **Smooth Animations**: Professional loading animations and smooth scrolling
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Categories**: Visual representation of all waste categories

### Smart Recommendations
- **Disposal Guidance**: Specific instructions for each waste type
- **Environmental Tips**: Educational information about recycling and sustainability
- **Safety Warnings**: Special alerts for hazardous materials like batteries

---

## 🛠️ Technology Stack

### Backend
- **Python 3.x** - Core programming language
- **Flask** - Web framework for API endpoints
- **Google Generative AI (Gemini)** - AI model for image classification
- **PIL (Pillow)** - Image processing library
- **python-dotenv** - Environment variable management

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive functionality

### API Integration
- **Google Gemini 1.5 Flash** - Advanced AI model for waste classification

---

## 📁 Project Structure

```
WasteClassificationWebsite/
│
├── backend/
│   ├── app.py              # Main Flask application
│   ├── backend.py          # AI processing and waste analysis logic
│   ├── requirements.txt    # Python dependencies
│
├── frontend/
│   ├── templates/
│   │   └── index.html      # Main web interface
│   │
│   └── static/
│       ├── script.js       # Frontend JavaScript functionality
│       ├── styling.css     # CSS styles and animations
│       └── images/         # Sample waste images
│           ├── landfill_other.jpg
│           ├── organic.jpg
│           ├── recyclable_paper.jpg
│           └── recyclable_plastic.jpg
├── .env                   # Environment variables (API keys)
├── README.md              # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Python 3.7+
- Google Cloud Account (for Gemini API)

### 1. Clone the Repository
```bash
git clone https://github.com/RaveeshSehrawat/WasteClassificationWebsite.git
cd WasteClassificationWebsite
```

### 2. Install Dependencies
For Linux/macOS Users:
```
cd backend
python -m venv venv  
source venv/bin/activate  
pip install -r requirements.txt 
```
For Windows Users:
```
cd backend
python -m venv venv  

# Activate virtual environment (PowerShell)
venv\Scripts\Activate.ps1  

# OR (CMD)
venv\Scripts\activate.bat  

pip install -r requirements.txt 
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY="your_google_gemini_api_key_here"
```

### 4. Run the Application
```bash
python app.py
```

### 5. Access the Application
Open your browser and navigate to: `http://127.0.0.1:5000`

---

## How to Use

1. **Upload Image**: Click "Choose an image" or drag & drop a waste item photo
2. **Preview**: View the selected image in the upload area
3. **Analyze**: Click "Analyze Waste Type" button
4. **View Results**: 
   - See the identified waste category
   - Check confidence percentage
   - Read disposal recommendations
   - Review probability distribution

---

## 🗂️ Waste Categories

| Category | Icon | Description | Examples |
|----------|------|-------------|----------|
| **Battery** | 🔋 | Electronic power sources | AA, phone batteries, car batteries |
| **Biological** | 🌱 | Organic/compostable waste | Food scraps, leaves, biodegradable items |
| **Cardboard** | 📦 | Corrugated cardboard materials | Boxes, packaging materials |
| **Clothes** | 👕 | Textile materials | Shirts, pants, fabric items |
| **Glass** | 🥛 | Glass containers and items | Bottles, jars, glass containers |
| **Metal** | ⚙️ | Metallic objects | Cans, metal scraps, aluminum |
| **Paper** | 📄 | Paper products | Documents, newspapers, magazines |
| **Plastic** | ♳ | Plastic materials | Bottles, containers, plastic items |
| **Shoes** | 👟 | Footwear items | Sneakers, boots, sandals |
| **Trash** | 🗑️ | General waste | Non-recyclable mixed waste |
| **Other** | ❓ | Unclassified items | Items not fitting other categories |

---

## 🌱 Environmental Impact

Our project contributes to environmental sustainability by:

- **Reducing Contamination**: Proper waste sorting prevents recycling contamination
- **Education**: Teaching users about correct disposal methods
- **Awareness**: Promoting environmental consciousness
- **Efficiency**: Making waste sorting accessible and easy
- **Community Impact**: Helping create cleaner communities

---

## 📝 License

This project is developed for the final project of Agentic AI IBM SkillsBuild, CSRBOX program.

---

*"Together for a Sustainable Future" 🌍*

Made with ♻️ by **Team AIR 8**

