import React from 'react';
import { Container, StyledAnchor } from './styles';

type ProjectsProps = {
  title: string;
  url: string;
  description: string;
};

const ProjectCard: React.FC<ProjectsProps> = ({ title, url, description }) => {
  return (
    <Container>
      <StyledAnchor href={url} target="__blank">
        <h3>{title}</h3>
        <div>{description}</div>
      </StyledAnchor>
    </Container>
  );
};

export default ProjectCard;
