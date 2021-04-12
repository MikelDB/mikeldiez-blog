import React from 'react';
import {
  Container,
  StyledAnchor,
  H3,
  TextContainer,
  TagsContainer,
  Tags,
} from './styles';

type ProjectsProps = {
  title: string;
  url: string;
  description: string;
  isDemo: boolean;
  tags: [{ name: string }];
};

const ProjectCard: React.FC<ProjectsProps> = ({
  title,
  url,
  description,
  tags,
  isDemo,
}) => {
  return (
    <Container>
      <H3>{title}</H3>
      <TagsContainer>
        {tags.map((tag) => (
          <Tags key={tag.name}>{tag.name}</Tags>
        ))}
      </TagsContainer>
      <TextContainer>{description}</TextContainer>
      <StyledAnchor href={url} target="__blank">
        {isDemo ? 'Demo' : 'Code'}
      </StyledAnchor>
    </Container>
  );
};

export default ProjectCard;
