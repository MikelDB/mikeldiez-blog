import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
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
  box-shadow: ${({ theme }) => theme.colors.secondary} 0.5rem 0px 0px,
    ${({ theme }) => theme.colors.secondary} -0.5rem 0px 0px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.25em;
  font-size: 32px;
  font-weight: bold;
`;

export const SubHeading = styled.h3`
  box-shadow: ${({ theme }) => theme.colors.secondary} 0.5rem 0px 0px,
    ${({ theme }) => theme.colors.secondary} -0.5rem 0px 0px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.25em;
  font-size: 24px;
  font-weight: bold;
`;
