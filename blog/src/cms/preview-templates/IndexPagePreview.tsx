import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';
import { ThemeProvider } from 'styled-components';
import { theme } from '@components/organisms/Layout/Layout';
type IndexPagePreviewProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry: any;
};

const IndexPagePreview: React.FC<IndexPagePreviewProps> = ({ entry }) => {
  console.log(typeof entry);
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ThemeProvider theme={theme}>
        <IndexPageTemplate
          title={data.title}
          subheading={data.subheading}
          githubtext={data.githubtext}
          githuburl={data.githuburl}
          projects={data.projects}
        />
      </ThemeProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
