import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/organisms/Layout';
import { Banner } from '@components/atoms';
import { ProjectsSection } from '@components/organisms';

type IndexPageTemplateProps = {
  title: string;
  subheading: string;
};

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
  title,
  subheading,
}) => (
  <>
    <Banner heading={title} subheading={subheading} />
    <ProjectsSection />
  </>
);

type ImagePageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        subheading: string;
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
