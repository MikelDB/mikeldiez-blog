import React from 'react';
import { FooterContainer, SocialIconsContainer, SocialIcon } from './styles';
import Github from '@images/github-icon.svg';
import Stackoverflow from '@images/stackoverflow-icon.svg';
import Linkedin from '@images/linkedin-icon.svg';

const Footer: React.FC = (): React.ReactElement => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon href="//www.github.com/mikeldb">
          <Github />
        </SocialIcon>
        <SocialIcon href="//stackoverflow.com/users/4769750/mikel-d%c3%adez-buil">
          <Stackoverflow />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/mikeldiezb/">
          <Linkedin />
        </SocialIcon>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
