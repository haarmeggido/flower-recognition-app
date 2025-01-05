import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

const Profile: React.FC = () => {
  const { fetchUserData, updateUserDetails } = useUser();
  const [userData, setUserData] = useState<any | null>(null);
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [showEmailUpdate, setShowEmailUpdate] = useState(false);
  const [showResetData, setShowResetData] = useState(false);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);

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

  const handleEmailUpdate = async () => {
    try {
      await updateUserDetails({ email });
      alert("Email updated successfully!");
      setCurrentEmail(email); // Update the local email state
      setEmail(""); // Clear the input field
    } catch (err) {
      alert("Error updating email.");
    }
  };

  const handleResetData = async () => {
    try {
      await updateUserDetails({
        total_recognitions: 0,
        unique_recognitions: 0,
        flower_mask: 0,
      });
      alert("User data reset successfully!");
      setUserData({ ...userData, total_recognitions: 0, unique_recognitions: 0, flower_mask: 0 }); // Update the local user data
      setShowResetConfirmation(false); // Close the modal
    } catch (err) {
      alert("Error resetting user data.");
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

      {/* Email Update */}
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
            <button className="btn btn-primary" onClick={handleEmailUpdate}>Update Email</button>
          </div>
        </div>
      )}

      {/* Reset Data */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showResetData}
          onChange={() => setShowResetData(!showResetData)}
          id="resetDataCheck"
        />
        <label className="form-check-label" htmlFor="resetDataCheck">
          Reset User Data
        </label>
      </div>

      {showResetData && (
        <div className="mt-3">
          <button className="btn btn-danger" onClick={() => setShowResetConfirmation(true)}>
            Reset Data
          </button>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirmation && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Reset</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowResetConfirmation(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to reset your data? This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowResetConfirmation(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleResetData}>
                  Confirm Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
