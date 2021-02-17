import React from 'react';
import BlogRoll from '@components/BlogRoll';
import { Link } from 'gatsby';
import { Container, ContentContainer } from './styles';

type Props = {};

const ProjectsSection: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <Container>
      <ContentContainer>
        <h3>Projects</h3>
        <BlogRoll />
        <a href='https://www.github.com/mikeldb'>
          You can check my other projects on GitHub
        </a>
      </ContentContainer>
    </Container>
  );
};

export default ProjectsSection;
