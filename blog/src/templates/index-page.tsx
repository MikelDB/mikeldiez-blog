import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/organisms/Layout';
import { Banner } from '@components/atoms';
import { ProjectsSection } from '@components/organisms';

type ProjectsProps = {
  title: string;
  url: string;
  description: string;
};

type IndexPageTemplateProps = {
  title: string;
  subheading: string;
  projects: ProjectsProps[];
  githuburl: string;
  githubtext: string;
};

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
  title,
  subheading,
  projects,
  githuburl,
  githubtext,
}) => (
  <>
    <Banner heading={title} subheading={subheading} />
    <ProjectsSection
      projects={projects}
      githubtext={githubtext}
      githuburl={githuburl}
    />
  </>
);

type ImagePageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        subheading: string;
        projects: ProjectsProps[];
        githuburl: string;
        githubtext: string;
      };
    };
  };
};

const IndexPage: React.FC<ImagePageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        projects={frontmatter.projects}
        githubtext={frontmatter.githubtext}
        githuburl={frontmatter.githuburl}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        githuburl
        githubtext
        projects {
          title
          url
          description
        }
      }
    }
  }
`;
