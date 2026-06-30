import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_URL}/api/v1/auth/login/admin`, {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      onLogin && onLogin("admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login as Admin</button>
      {error && <div style={{color: "red"}}>{error}</div>}
    </form>
  );
} 
