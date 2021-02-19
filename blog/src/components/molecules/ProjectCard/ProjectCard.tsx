import React from 'react';
import { Container, StyledAnchor, H3, TextContainer } from './styles';

type ProjectsProps = {
  title: string;
  url: string;
  description: string;
};

const ProjectCard: React.FC<ProjectsProps> = ({ title, url, description }) => {
  return (
    <Container>
      <H3>{title}</H3>
      <TextContainer>{description}</TextContainer>
      <StyledAnchor href={url} target="__blank">
        Code
      </StyledAnchor>
    </Container>
  );
};

export default ProjectCard;
