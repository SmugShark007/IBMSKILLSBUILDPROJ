# app.py
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from flask import Flask, request, jsonify, render_template, url_for
from backend import analyze_waste, configure_genai, SUGGESTIONS
from PIL import Image
from dotenv import load_dotenv
import io

project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(project_root, '.env'))

template_dir = os.path.join(project_root, 'frontend', 'templates')
static_dir = os.path.join(project_root, 'frontend', 'static')

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

# Replace with your actual API key in the .env file
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
configure_genai(GEMINI_API_KEY)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"})

    file = request.files["file"]
    
    try:
        # Read the image file
        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        
        # Get prediction
        predicted_label, confidence, probabilities, explanation = analyze_waste(image)
        
        return jsonify({
            "prediction": predicted_label,
            "confidence": round(confidence * 100, 2),
            "suggestion": SUGGESTIONS[predicted_label],
            "explanation": explanation,
            "probabilities": {label: round(prob * 100, 2) for label, prob in probabilities.items()}
        })
        
    except Exception as e:
        print(f"Error in predict route: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
