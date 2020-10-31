import React, { useState } from 'react';
import { Link } from 'gatsby';
import github from '@images/github-icon.svg';
import stackoverflow from '@images/stackoverflow-icon.svg';
import linkedin from '@images/linkedin-icon.svg';
import { Logo } from '@components/atoms/Logo';

const Navbar: React.FC = (): React.ReactElement => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Logo />
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${isMenuActive ? 'is-active' : ''}`}
              data-target="navMenu"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/mikeldb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/mikeldiezb/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="Linkedin" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://stackoverflow.com/users/4769750/mikel-d%c3%adez-buil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={stackoverflow} alt="StackOverflow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
};


export default Navbar;