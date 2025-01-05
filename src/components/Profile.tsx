import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

const Profile: React.FC = () => {
  const { fetchUserData, updateUserDetails } = useUser();
  const [userData, setUserData] = useState<any | null>(null);
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [showEmailUpdate, setShowEmailUpdate] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
        setCurrentEmail(data.email); // Set the initial email
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    loadUserData();
  }, [fetchUserData]);

  const handleUpdate = async () => {
    try {
      await updateUserDetails({ email });
      alert("Email updated successfully!");
      setCurrentEmail(email); // Update the local email state
      setEmail(""); // Clear the input field
    } catch (err) {
      alert("Error updating email.");
    }
  };

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Hello, {userData.username}!</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Your Statistics</h3>
          <p className="card-text"><strong>Total Recognitions:</strong> {userData.total_recognitions}</p>
          <p className="card-text"><strong>Unique Recognitions:</strong> {userData.unique_recognitions}</p>
          <p className="card-text"><strong>Flower Mask:</strong> {userData.flower_mask}</p>
        </div>
      </div>

      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showEmailUpdate}
          onChange={() => setShowEmailUpdate(!showEmailUpdate)}
          id="updateEmailCheck"
        />
        <label className="form-check-label" htmlFor="updateEmailCheck">
          Update Email
        </label>
      </div>

      {showEmailUpdate && (
        <div className="mt-3">
            <p>Current Email: {currentEmail ? currentEmail : "No set email yet"}</p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter new email"
            />
            <button className="btn btn-primary" onClick={handleUpdate}>Update Email</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
