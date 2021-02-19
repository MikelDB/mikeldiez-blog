import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  border-radius: 10px;
  padding: 12px;
  background-color: #fafafa;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 48px;
  }
`;

export const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fafafa;
  width: 100%;
  padding: 12px;
  margin-bottom: 0;
  margin-top: auto;
  border-radius: 10px;
  background-color: rgba(32, 32, 96, 1);
  font-weight: bold;
`;

export const H3 = styled.h3`
  align-self: center;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const TextContainer = styled.div`
  padding-bottom: 24px;
`;
