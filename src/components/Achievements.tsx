import React, { useState, useEffect, useContext } from "react";
import { useUser } from "./UserContext";
import achievementsData from "../data/achievements.json"; // Place your achievements JSON here

const Achievements: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<any[]>([]);
  const [lockedAchievements, setLockedAchievements] = useState<any[]>([]);

  const { fetchUserData, updateUserDetails } = useUser();

  useEffect(() => {
    const fetchAndSetUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };
    fetchAndSetUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (userData) {
      const unlocked: any[] = [];
      const locked: any[] = [];

      achievementsData.forEach((achievement) => {
        if (isAchievementUnlocked(achievement.condition, userData)) {
          unlocked.push(achievement);
        } else {
          locked.push(achievement);
        }
      });

      setUnlockedAchievements(unlocked);
      setLockedAchievements(locked);
    }
  }, [userData]);

  const isAchievementUnlocked = (condition: any, userData: any) => {
    if (condition.total_recognitions && userData.total_recognitions < condition.total_recognitions) {
      return false;
    }
    if (condition.unique_recognitions && userData.unique_recognitions < condition.unique_recognitions) {
      return false;
    }
    if (
      condition.flower_mask &&
      condition.flower_mask.bit !== undefined &&
      !(userData.flower_mask & (1 << condition.flower_mask.bit))
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="container mt-4">
      <h2>Achievements</h2>
      <div className="row">
        {unlockedAchievements.map((achievement, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-success">
              <div className="card-body">
                <h5 className="card-title">{achievement.icon} {achievement.name}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-5">Locked Achievements</h3>
      <div className="row">
        {lockedAchievements.map((achievement, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-secondary text-muted">
              <div className="card-body">
                <h5 className="card-title">{achievement.icon} {achievement.name}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
