import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

const StyledLink = Styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  margin-left: 8px;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Logo: React.FC = (): React.ReactElement => {
  return (
    <StyledLink to="/" title="Logo">
      MikelDB
    </StyledLink>
  );
};

export default Logo;
