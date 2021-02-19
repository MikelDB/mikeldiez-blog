import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-bottom: 0;
  margin-top: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px 16px;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0px 8px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0px 8px;

  & > svg {
    height: 24px;
    width: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    fill: #ffffff;
    cursor: pointer;
  }
`;
