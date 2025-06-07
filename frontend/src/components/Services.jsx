import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Services.css";

const Services = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const services = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
      title: "Cultural Festivals",
      description: "Celebrate diversity with vibrant performances, art exhibitions, and cultural showcases that bring communities together.",
      pricing: "Tickets starting from Rs.599",
      details: [
        "Multiple cultural performances",
        "Food stalls from different cuisines",
        "Art and craft exhibitions",
        "Interactive cultural workshops"
      ]
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      title: "Tech Events & Hackathons",
      description: "Foster innovation with coding competitions, tech workshops, and networking events for future tech leaders.",
      pricing: "Early bird tickets from Rs.499",
      details: [
        "24-hour hackathon challenges",
        "Tech workshops and seminars",
        "Networking sessions",
        "Prizes worth Rs.10,000"
      ]
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
      title: "Concerts & Live Shows",
      description: "Experience unforgettable performances with state-of-the-art sound and lighting in perfectly curated venues.",
      pricing: "Premium tickets from Rs.799",
      details: [
        "Featured artists lineup",
        "VIP meet and greet",
        "Premium seating options",
        "Food and beverage packages"
      ]
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      title: "Birthday Celebrations",
      description: "Create magical moments with customized themes, entertainment, and picture-perfect decorations.",
      pricing: "Packages starting from Rs.499",
      details: [
        "Customized theme decoration",
        "Professional photography",
        "Catering services",
        "Entertainment options"
      ]
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
      title: "Private Parties",
      description: "Transform any occasion into an exclusive gathering with personalized catering, decor, and entertainment solutions.",
      pricing: "Premium tickets from Rs.799",
      details: [
        "Venue selection assistance",
        "Custom menu planning",
        "Theme-based decoration",
        "Event staff and security"
      ]
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
      title: "Wedding Events",
      description: "Turn your dream wedding into reality with our comprehensive planning, from intimate ceremonies to grand receptions.",
      pricing: "Packages from Rs.999",
      details: [
        "Complete wedding planning",
        "Decoration and flowers",
        "Photography and videography",
        "Catering and entertainment"
      ]
    },
  ];

  const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>&times;</button>
          <img src={event.url} alt={event.title} className="modal-image" />
          <h2>{event.title}</h2>
          <p className="description">{event.description}</p>
          <h3>What's Included:</h3>
          <ul>
            {event.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div className="pricing-section">
            <h3>Pricing</h3>
            <p>{event.pricing}</p>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={onClose}
              className="book-now"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="services container">
        <h2>OUR EVENT SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div 
                className="item" 
                key={element.id}
                onClick={() => setSelectedEvent(element)}
              >
                <img src={element.url} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </>
  );
};

export default Services;