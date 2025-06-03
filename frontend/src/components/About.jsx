import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="tagline">We Turn Moments into Memories</p>
        
        <p>
          At <strong>Eventify</strong>, we specialize in crafting unforgettable experiences
          through thoughtful planning, creative design, and flawless execution.
        </p>
      
        <p>
          Whether it's a corporate event, wedding, cultural fest, or private celebration,
          we handle every detail — so you can focus on enjoying the moment.
        </p>

        <h3>🎯 What We Offer</h3>
        <ul>
          <li>Corporate Events (Seminars, Launches, Team-Building)</li>
          <li>Weddings & Celebrations (Traditional, Destination, Themed)</li>
          <li>College & Cultural Fests</li>
          <li>Concerts, Exhibitions & Trade Shows</li>
        </ul>

        <h3>✨ Why Choose Us</h3>
        <ul>
          <li>Creative Concepts & Custom Themes</li>
          <li>Experienced Event Planners & Coordinators</li>
          <li>End-to-End Management</li>
          <li>Transparent Communication & Timely Delivery</li>
        </ul>
      </div>
    </section>
  );
};

export default About;