import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '@components/organisms/Footer';
import { Navbar } from '@components/organisms/Navbar';
import '../../all.sass';
import { useSiteMetadata } from '@components/atoms/SiteMetadata';
import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    background_primary: '#202040',
    background_secondary: '#202060',
    background_tertiary: '#202080',
    primary: '#602080',
    secondary: '#b030b0',
  },
};

type TemplateWrapperProps = {
  children: React.ReactElement;
};

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
