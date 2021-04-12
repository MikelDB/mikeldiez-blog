import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/organisms/Layout';
import { Banner } from '@components/atoms';
import { ProjectsSection } from '@components/organisms';

type ProjectsProps = {
  title: string;
  url: string;
  isdemo: boolean;
  description: string;
  tags: [
    {
      name: string;
    }
  ];
};

type IndexPageTemplateProps = {
  title: string;
  subheading: string;
  projects: ProjectsProps[];
  githuburl: string;
  githubtext: string;
  isDemo: boolean;
};

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
  title,
  subheading,
  projects,
  githuburl,
  githubtext,
  isDemo,
}) => (
  <>
    <Banner heading={title} subheading={subheading} />
    <ProjectsSection
      projects={projects}
      githubtext={githubtext}
      githuburl={githuburl}
      isdemo={isDemo}
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
        isdemo: boolean;
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
        isDemo={frontmatter.isdemo}
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
          isdemo
          description
          tags {
            name
          }
        }
      }
    }
  }
`;
