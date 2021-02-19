import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 36px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  color: rgb(32, 32, 96, 0.95);
`;

export const MoreProjects = styled.a`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid rgb(32, 32, 96, 0.5);
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 16px;

  padding: 8px;
`;
