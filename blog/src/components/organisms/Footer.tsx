import React from 'react';
import { Link } from 'gatsby';

import Icon from '../atoms/Icon'; 


import github from '../../img/github-icon.svg'
import stackoverflow from '../../img/stackoverflow-icon.svg'
import linkedin from '../../img/linkedin-icon.svg'

const Footer: React.FC = (): React.ReactElement => {
    return (
        <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Aboutasd
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <Icon 
                  src={github}
                  title="twitter"
                  href="https://twitter.com"
                  alt="Twitter"
                />
                <Icon 
                  src={stackoverflow}
                  title="twitter"
                  href="https://twitter.com"
                  alt="Twitter"
                />
                <Icon 
                  src={linkedin}
                  title="twitter"
                  href="https://twitter.com"
                  alt="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};


export default Footer;