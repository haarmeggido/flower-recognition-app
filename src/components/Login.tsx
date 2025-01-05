import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      login(data.token); // Save JWT to context and localStorage
      navigate("/account"); // Redirect to account page
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btn-block mt-3" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
          <div className="text-center mt-3"></div>
            <p>Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register here</button></p>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
