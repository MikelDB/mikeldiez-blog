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
  isdemo: boolean;
  tags: [
    {
      name: string;
    }
  ];
};

type ProjectsSectionProps = {
  projects: ProjectsProps[];
  githuburl: string;
  githubtext: string;
  isdemo: boolean;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  githubtext,
  githuburl,
  isdemo,
}) => {
  return (
    <Container>
      <ContentContainer>
        <H2>Main projects</H2>
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              url={project.url}
              description={project.description}
              tags={project.tags}
              isDemo={project.isdemo}
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
