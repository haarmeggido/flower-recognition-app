import React, { useState, useRef, useEffect } from "react";
import styles from "./FlowerClassifier.module.css";
import FlowerInfoModal from "./FlowerInfoModal";
import flowerData from "../data/flowers.json";
import { useUser } from "./UserContext";

const FlowerClassifier: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [result, setResult] = useState<string>("No result yet.");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentFlowerData, setCurrentFlowerData] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateUserDetails } = useUser();

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/user/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

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
  const formData = new FormData();
  formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8080/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to classify the image.");
      }

      const data = await response.json();
      const { predicted_label, predicted_class } = data;

      setResult(`Predicted Class: ${predicted_label}`);
      const flower = flowerData.find((item) => item.class === predicted_label);

      if (flower) {
        setCurrentFlowerData(flower);
        setShowModal(true);
      } else {
        console.error("Flower class not found in data.");
      }


      // Fetch user data
      const userData = await fetchUserData();
      if (userData) {
        const currentMask = userData.flower_mask;
        const newMask = currentMask | (1 << predicted_class); // Flip the predicted class bit
        const uniqueRecognitions = newMask
          .toString(2) // Convert to binary string
          .split("") // Split into individual bits
          .filter((bit) => bit === "1").length; // Count the number of 1's

        // Update user details with new values
        await updateUserDetails({
          total_recognitions: userData.total_recognitions + 1,
          flower_mask: newMask,
          unique_recognitions: uniqueRecognitions,
        });
      }
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
      <div className={styles.previewContainer}>
        {previewSrc && (
          <img
            src={previewSrc}
            alt="Uploaded preview"
            className={styles.preview}
          />
        )}
      </div>

      <button className={styles.button} onClick={handleRecognition}>
        Recognize Flower
      </button>

      <div className={styles.result}>
        <p>
          <strong>Result:</strong> {result}
        </p>
      </div>

      {showModal && currentFlowerData && (
        <FlowerInfoModal
          onClose={() => setShowModal(false)}
          flowerData={currentFlowerData}
        />
      )}
    </div>
  );
};

export default FlowerClassifier;
