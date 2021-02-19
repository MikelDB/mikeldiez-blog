import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '@components/organisms/Footer';
import { Navbar } from '@components/organisms/Navbar';
import { useSiteMetadata } from '@components/atoms/SiteMetadata';
import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    min-height: 100vh;
    background-color: #f4f4f4;
  }

  #___gatsby {
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
`;

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
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

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
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
