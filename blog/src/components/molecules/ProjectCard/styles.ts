import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  border-radius: 10px;
  padding: 1rem 1.25rem;
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
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  font-weight: bold;
`;

export const H3 = styled.h3`
  align-self: center;
  margin-top: 4px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TextContainer = styled.div`
  padding-bottom: 24px;
  line-height: 1.5;
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Tags = styled.div`
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: #fafafa;
  margin: 0 2px;
  padding: 2px 4px;
  font-size: 11px;
  border-radius: 4px;
`;
