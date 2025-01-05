import React from "react";
import styles from "./FlowerInfoModal.module.css";

interface AdditionalInfo {
  family: string;
  height: string;
  habitat: string;
}

interface FlowerInfoModalProps {
  onClose: () => void;
  flowerData: {
    class: string;
    name: string;
    scientific_name: string;
    description: string;
    additional_info: AdditionalInfo;
  };
}

const FlowerInfoModal: React.FC<FlowerInfoModalProps> = ({ onClose, flowerData }) => {
  const { class: className, name, scientific_name, description, additional_info } = flowerData;
  const imageSrc = `/src/assets/flower_icons/${className}.jpg`;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.modalTitle}>{name}</h2>
        <img src={imageSrc} alt={name} className={styles.modalImage} />
        <p className={styles.modalScientificName}>
          <strong>Scientific Name:</strong> {scientific_name}
        </p>
        <p className={styles.modalDescription}>{description}</p>
        <p className={styles.modalAdditionalInfo}>
          <strong>Family:</strong> {additional_info.family}<br />
          <strong>Height:</strong> {additional_info.height}<br />
          <strong>Habitat:</strong> {additional_info.habitat}
        </p>
      </div>
    </div>
  );
};

export default FlowerInfoModal;
