import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 36px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProjectsContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const H2 = styled.h2`
  color: rgb(32, 32, 96, 0.95);
`;

export const MoreProjects = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  background-color: #fafafa;
  padding: 12px;
  margin-top: 16px;
  border-radius: 10px;
  color: rgba(32, 32, 96, 1);
  border: 2px solid rgba(32, 32, 96, 1);
  font-weight: bold;
  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    color: #fafafa;
    border: 2px solid rgba(32, 32, 96, 1);
    background-color: rgba(32, 32, 96, 1);
  }
`;
