import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';


const StyledLink = Styled(props => <Link {...props} />)`
  color: #3e206d;
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  margin-left: 8px;
  &:hover {
    color: #3e206d
  }
`;

const Logo: React.FC = ({}): React.ReactElement => {
    return (
        <StyledLink to="/" title="Logo">
            MikelDB
        </StyledLink>
    );
};


export default Logo;