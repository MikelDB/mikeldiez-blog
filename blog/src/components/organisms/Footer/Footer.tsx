import React from 'react';
import { FooterContainer, SocialIconsContainer, SocialIcon } from './styles';
import Github from '@images/github-icon.svg';
import Stackoverflow from '@images/stackoverflow-icon.svg';
import Linkedin from '@images/linkedin-icon.svg';

const Footer: React.FC = (): React.ReactElement => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon>
          <Github />
        </SocialIcon>
        <SocialIcon>
          <Stackoverflow />
        </SocialIcon>
        <SocialIcon>
          <Linkedin />
        </SocialIcon>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
