import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
          alt="College event celebration"
          className="main-image"
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="floating-images">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=100" 
          alt="Corporate event"
          className="float-image float-1"
        />
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=100" 
          alt="Wedding celebration"
          className="float-image float-2"
        />
        <img 
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=100" 
          alt="Elegant dinner"
          className="float-image float-3"
        />
      </div>

      <div className="hero-content">
        <div className="content-wrapper">
          <h1>Make Your Events Extraordinary</h1>
          <p>Creating Vibrant Experiences</p>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="cta-button"
          >
            PLAN YOUR EVENT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;