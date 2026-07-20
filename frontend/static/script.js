function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const result = document.getElementById("result");

    if (fileInput.files.length === 0) {
        alert("Please select an image.");
        return;
    }

    // Show loading state immediately and scroll to it
    result.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <h3>AI is analyzing your waste image...</h3>
            <p>Please wait while our AI identifies the waste type and provides disposal recommendations.</p>
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    // Scroll to loading animation immediately
    setTimeout(() => {
        result.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                result.innerHTML = `
                        <div class="error-message">
                            <span>❌</span>
                            <p>${data.error}</p>
                        </div>
                    `;
                
                // Scroll to error message
                setTimeout(() => {
                    result.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            } else {
                const reader = new FileReader();
                reader.onload = function (e) {
                    result.innerHTML = `
                            <div class="prediction-result">
                                <div class="result-header">
                                    <h2>📋 Analysis Results</h2>
                                    <div class="confidence-badge">
                                        ${data.confidence}% confident
                                    </div>
                                </div>
                                
                                <div class="result-grid">
                                    <div class="result-image">
                                        <img src="${e.target.result}" alt="Analyzed waste">
                                    </div>
                                    
                                    <div class="result-details">
                                        <div class="prediction-type">
                                            <h3>Type: ${data.prediction}</h3>
                                            <p class="explanation">${data.explanation}</p>
                                        </div>
                                        
                                        <div class="suggestion-box">
                                            <h4>💡 Disposal Suggestion:</h4>
                                            <p>${data.suggestion}</p>
                                        </div>
                                        
                                        <div class="probabilities">
                                            <h4>📊 Other Possibilities:</h4>
                                            <div class="prob-bars">
                                                ${Object.entries(data.probabilities)
                            .sort((a, b) => b[1] - a[1])
                            .map(([label, prob]) => `
                                                        <div class="prob-item">
                                                            <span class="prob-label">${label}</span>
                                                            <div class="prob-bar">
                                                                <div class="prob-fill" style="width: ${prob}%"></div>
                                                                <span class="prob-value">${prob.toFixed(1)}%</span>
                                                            </div>
                                                        </div>
                                                    `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    
                    // Scroll to results after a short delay to allow content to render
                    setTimeout(() => {
                        result.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }, 100);
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        })
        .catch(err => {
            result.innerHTML = `
                    <div class="error-message">
                        <span>❌</span>
                        <p>Error: ${err.message}</p>
                    </div>
                `;
            
            // Scroll to error message
            setTimeout(() => {
                result.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        });
}

// Function to show image preview when file is selected
function showImagePreview(file) {
    const previewContainer = document.getElementById("imagePreview");
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `
                <div class="preview-image-wrapper">
                    <img src="${e.target.result}" alt="Selected image" class="upload-preview-image">
                    <p class="preview-filename">${file.name}</p>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = '';
    }
}

// Add event listener for file input change
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            showImagePreview(e.target.files[0]);
        }
    });
});

// Add drag and drop support
const uploadBox = document.querySelector('.upload-box');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadBox.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    uploadBox.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    uploadBox.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    uploadBox.classList.add('drag-active');
}

function unhighlight(e) {
    uploadBox.classList.remove('drag-active');
}

uploadBox.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    document.getElementById('fileInput').files = files;
    if (files.length > 0) {
        showImagePreview(files[0]);
    }
}