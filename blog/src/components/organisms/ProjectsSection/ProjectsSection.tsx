import React from 'react';
import { Container, ContentContainer } from './styles';

const ProjectsSection: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <h3>Projects</h3>
        <a href="https://www.github.com/mikeldb">
          You can check my other projects on GitHub
        </a>
      </ContentContainer>
    </Container>
  );
};

export default ProjectsSection;
