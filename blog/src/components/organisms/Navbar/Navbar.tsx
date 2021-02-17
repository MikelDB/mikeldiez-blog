import React, { useState } from 'react';
import { Link } from 'gatsby';
import GitHubSvg from '@images/github-icon.svg';
import StackOverflowSvg from '@images/stackoverflow-icon.svg';
import LinkedinSvg from '@images/linkedin-icon.svg';
import { Logo } from '@components/atoms/Logo';
import { NavBar, IconsContainer, IconAnchor } from './styles';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <NavBar role='navigation' aria-label='main-navigation'>
      <Logo />
      <IconsContainer>
        <IconAnchor
          href='https://github.com/mikeldb'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubSvg />
        </IconAnchor>
        <IconAnchor
          href='https://www.linkedin.com/in/mikeldiezb/?locale=en_US'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinSvg />
        </IconAnchor>
      </IconsContainer>
    </NavBar>
  );
};

export default Navbar;
