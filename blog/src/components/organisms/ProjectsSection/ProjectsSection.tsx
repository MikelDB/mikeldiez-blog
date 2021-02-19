import React from 'react';
import {
  Container,
  ContentContainer,
  ProjectsContainer,
  H2,
  MoreProjects,
} from './styles';
import { ProjectCard } from '@components';

type ProjectsProps = {
  title: string;
  url: string;
  description: string;
};

type ProjectsSectionProps = {
  projects: ProjectsProps[];
  githuburl: string;
  githubtext: string;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  githubtext,
  githuburl,
}) => {
  console.log(projects);
  return (
    <Container>
      <ContentContainer>
        <H2>Projects</H2>
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              url={project.url}
              description={project.description}
            />
          ))}
        </ProjectsContainer>
        <MoreProjects href={githuburl} target="__blank">
          {githubtext}
        </MoreProjects>
      </ContentContainer>
    </Container>
  );
};

export default ProjectsSection;
