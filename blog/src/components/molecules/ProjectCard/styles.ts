import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  border-radius: 10px;
  padding: 12px;
  background-color: #fafafa;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fafafa;
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  bottom: 0;
  border-radius: 10px;
  background-color: #2b5876;
  font-weight: bold;
`;

export const H3 = styled.h3`
  align-self: center;
  margin-top: 4px;
  margin-bottom: 12px;
`;