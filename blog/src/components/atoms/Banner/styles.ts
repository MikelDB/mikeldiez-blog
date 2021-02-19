import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: rgb(32, 32, 64);
  background: radial-gradient(
    circle,
    rgba(96, 32, 128, 1) 0%,
    rgba(32, 32, 64, 1) 100%
  );
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
  box-shadow: ${({ theme }) => theme.colors.background_secondary} 0.5rem 0px 0px,
    ${({ theme }) => theme.colors.background_secondary} -0.5rem 0px 0px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: white;
  padding: 0.25em;
  font-size: 32px;
  font-weight: bold;
  width: 300px;
`;

export const SubHeading = styled.h3`
  box-shadow: ${({ theme }) => theme.colors.background_secondary} 0.5rem 0px 0px,
    ${({ theme }) => theme.colors.background_secondary} -0.5rem 0px 0px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: white;
  padding: 0.25em;
  font-size: 24px;
  font-weight: bold;
`;
