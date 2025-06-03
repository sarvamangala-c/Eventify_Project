import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <nav>
      <div className="logo">
        <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Eventify</RouterLink>
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {isAuthenticated ? (
            <>
              <ScrollLink to="hero" spy={true} smooth={true} duration={500}>
                HOME
              </ScrollLink>
              <ScrollLink to="services" spy={true} smooth={true} duration={500}>
                SERVICES
              </ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                ABOUT
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                CONTACT
              </ScrollLink>
              <button onClick={handleLogout} className="auth-link logout-btn">
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <RouterLink to="/signin" className="auth-link">
                SIGN IN
              </RouterLink>
              <RouterLink to="/signup" className="auth-link">
                SIGN UP
              </RouterLink>
            </>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;