import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Flower Recognition App!</h1>
        <p className="lead">
          Manage your profile, explore stats, and check your achievements - all in one place.
        </p>
        <hr className="my-4" />
        <p>
          Check out the latest updates, or jump straight into your profile to start exploring.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/classifier" className="btn btn-primary btn-lg mx-2">
            Go to the classifier
          </Link>
          <Link to="/account" className="btn btn-secondary btn-lg mx-2">
            View your account
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Management</h5>
              <p className="card-text">
                Update your email, reset user data, and view your recognitions.
              </p>
              <Link to="/account" className="btn btn-primary">
                Manage Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Achievements</h5>
              <p className="card-text">
                Track your progress and view the achievements you have unlocked.
              </p>
              <Link to="/achievements" className="btn btn-secondary">
                View Achievements
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Check out the creator of this page</h5>
              <p className="card-text">
                Stay updated with new features and improvements posted on Github
              </p>
              <a href="https://github.com/haarmeggido" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                Go to Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
