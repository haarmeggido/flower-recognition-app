import React, { useState, useRef } from "react";
import styles from "./FlowerClassifier.module.css";

const FlowerClassifier: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [result, setResult] = useState<string>("No result yet.");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(null);
    }
  };

  const handleRecognition = async () => {
    if (!fileInputRef.current?.files?.length) {
      setResult("Please upload a photo first.");
      return;
    }

    const file = fileInputRef.current.files[0];

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Replace with your API URL or Hugging Face endpoint
      const response = await fetch("http://127.0.0.1:8080/predict", {
        method: "POST",
        body: formData,
      });
      

      if (!response.ok) {
        throw new Error("Failed to classify the image.");
      }

      const data = await response.json();
      setResult(`Predicted Class: ${data.predicted_class}`);
    } catch (error) {
      console.error("Error during prediction:", error);
      setResult("An error occurred while recognizing the flower.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flower Classifier</h1>
      <p>Upload a photo of a flower, and we'll tell you what it is!</p>

      <div className={styles.uploadSection}>
        <label htmlFor="flower-image" className={styles.uploadLabel}>
          Choose Photo
        </label>
        <input
          type="file"
          id="flower-image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
        />
      </div>

      {previewSrc && (
        <img
          src={previewSrc}
          alt="Uploaded preview"
          className={styles.preview}
        />
      )}

      <button className={styles.button} onClick={handleRecognition}>
        Recognize Flower
      </button>

      <div className={styles.result}>
        <p><strong>Result:</strong> {result}</p>
      </div>
    </div>
  );
};

export default FlowerClassifier;
