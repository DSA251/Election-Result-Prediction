function handleFileUpload() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please choose a CSV file.");
        return;
    }
    window.location.href = "resultsimages.html"
    
}
