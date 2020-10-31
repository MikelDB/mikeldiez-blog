import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadataInterface = {
    title: string,
    description: string,
};

const useSiteMetadata = (): SiteMetadataInterface => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
};

export default useSiteMetadata;
