import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

const labels: any = {
  0: "bluebell",
  1: "buttercup",
  2: "colts_foot",
  3: "corn_poppy",
  4: "cowslip",
  5: "crocus",
  6: "daffodil",
  7: "daisy",
  8: "dandelion",
  9: "foxglove",
  10: "fritillary",
  11: "geranium",
  12: "hibiscus",
  13: "iris",
  14: "lily_valley",
  15: "pansy",
  16: "petunia",
  17: "rose",
  18: "snowdrop",
  19: "sunflower",
  20: "tigerlily",
  21: "tulip",
  22: "wallflower",
  23: "water_lily",
  24: "wild_tulip",
  25: "windflower",
};

const Profile: React.FC = () => {
  const { fetchUserData, updateUserDetails } = useUser();
  const [userData, setUserData] = useState<any | null>(null);
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [showEmailUpdate, setShowEmailUpdate] = useState(false);
  const [showResetData, setShowResetData] = useState(false);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [showFlowerModal, setShowFlowerModal] = useState(false);

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

  const getFlowerStatus = () => {
    const acquired = [];
    const remaining = [];

    for (let i = 0; i < Object.keys(labels).length; i++) {
      if ((userData.flower_mask & (1 << i)) !== 0) {
        acquired.push(labels[i]);
      } else {
        remaining.push(labels[i]);
      }
    }

    return { acquired, remaining };
  };

  if (!userData) {
    return <p className = "p-5">Loading profile...</p>;
  }

  const flowerStatus = getFlowerStatus();

  return (
    <div className="container mt-4">
      <h2>Hello, {userData.username}!</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Your Statistics</h3>
          <p className="card-text"><strong>Total Recognitions:</strong> {userData.total_recognitions}</p>
          <p className="card-text"><strong>Unique Recognitions:</strong> {userData.unique_recognitions}</p>
          
          <div>
            <button
              className="btn btn-link p-0"
              onClick={() => setShowFlowerModal(true)}
            >
              <strong>Acquired flowers:</strong> View List
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Flower List */}
      {showFlowerModal && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Flower List</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowFlowerModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Acquired Flowers Section */}
                <h5>Acquired Flowers</h5>
                {flowerStatus.acquired.length > 0 ? (
                  <div className="row">
                    {flowerStatus.acquired.map((flower) => (
                      <div className="col-6 col-md-4 col-lg-3 mb-2" key={flower}>
                        <div className="p-2 border rounded">{flower}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No Flowers Acquired</p>
                )}

                {/* Remaining Flowers Section */}
                <h5 className="mt-4">Remaining Flowers</h5>
                {flowerStatus.remaining.length > 0 ? (
                  <div className="row">
                    {flowerStatus.remaining.map((flower) => (
                      <div className="col-6 col-md-4 col-lg-3 mb-2" key={flower}>
                        <div className="p-2 border rounded">{flower}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">All Flowers Acquired</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowFlowerModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


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
