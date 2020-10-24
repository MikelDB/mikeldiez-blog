import React from 'react';
import { Link } from 'gatsby';

import Icon from '@components/atoms/Icon'; 

import { FooterContainer, LinksContainer, SocialIconsContainer, SocialIcon, FooterLinks } from './styles';

import github from '@images/github-icon.svg'
import stackoverflow from '@images/stackoverflow-icon.svg'
import linkedin from '@images/linkedin-icon.svg'

const Footer: React.FC = (): React.ReactElement => {
    return (
      <FooterContainer>
        <LinksContainer>
          <FooterLinks>
            <Link to="/">
              Home
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to="/about">
              About
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to="/products">
              Products
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to="/contact/examples">
              Form Examples
            </Link>
          </FooterLinks>
          <FooterLinks>
            <a
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </FooterLinks>
          <FooterLinks>
            <Link to="/blog">
              Latest Stories
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to="/contact">
              Contact
            </Link>
          </FooterLinks>
        </LinksContainer>
        <SocialIconsContainer>
          <SocialIcon>
            <Icon 
              src={github}
              title="github"
              href="https://github.com/mikeldb"
              alt="GitHub"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon 
              src={stackoverflow}
              title="stackoverflow"
              href="https://stackoverflow.com/users/4769750/mikel-d%C3%ADez-buil"
              alt="Stack Overflow"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon 
              src={linkedin}
              title="linkedin"
              href="https://www.linkedin.com/in/mikeldiezb/"
              alt="LinkedIn"
            />
           </SocialIcon>
        </SocialIconsContainer>
      </FooterContainer>
    );
};


export default Footer;