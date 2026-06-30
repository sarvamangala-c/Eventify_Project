import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";

export default function AddService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/api/v1/services`,
        { name, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Service added successfully!");
      setName("");
      setDescription("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add service");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Service (Admin Only)</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Service Name" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Service</button>
      {error && <div style={{color: "red"}}>{error}</div>}
      {success && <div style={{color: "green"}}>{success}</div>}
    </form>
  );
} 
