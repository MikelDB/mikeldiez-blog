import React from 'react';
import { Link } from 'gatsby';

import Icon from '@components/atoms/Icon'; 

import { FooterContainer, LinksContainer, SocialIconsContainer } from './Styles';

import github from '@images/github-icon.svg'
import stackoverflow from '@images/stackoverflow-icon.svg'
import linkedin from '@images/linkedin-icon.svg'

const Footer: React.FC = (): React.ReactElement => {
    return (
      <FooterContainer>
        <LinksContainer>
        <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
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
        </LinksContainer>
        <SocialIconsContainer>
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
        </SocialIconsContainer>
      </FooterContainer>
    );
};


export default Footer;