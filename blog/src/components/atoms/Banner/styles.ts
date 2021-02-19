import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #2b5876; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4e4376,
    #2b5876
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4e4376,
    #2b5876
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    padding: 0 8px;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  height: 150px;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
`;

export const Heading = styled.h1`
  background-color: rgb(32, 32, 96, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  color: white;
  padding: 0.25em;
  font-size: 32px;
  font-weight: bold;
  width: 300px;
`;

export const SubHeading = styled.h3`
  background-color: rgb(32, 32, 96, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  color: white;
  padding: 0.25em;
  font-size: 24px;
  font-weight: bold;
`;
