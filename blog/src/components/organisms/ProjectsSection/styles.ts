import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
