import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/v1/services`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setServices(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch services");
      }
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Available Services</h2>
      {error && <div style={{color: "red"}}>{error}</div>}
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <strong>{service.name}</strong>: {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
} 
