import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 4px 48px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-bottom: 1px solid #ffffff;
  top: 0;
  @media (max-width: 768px) {
    padding: 4px 4px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const IconAnchor = styled.a`
  margin-right: 8px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
  fill: #ffffff;
  & > svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
