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
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fafafa;
  padding: 12px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: #2b5876;
  font-weight: bold;
`;
