import React from 'react';
import { Container, TitlesContainer, Heading, SubHeading } from './styles';

type Props = {
  heading: string;
  subheading: string;
};

const Banner: React.FC<Props> = (props: Props) => {
  const { heading, subheading } = props;
  return (
    <Container>
      <TitlesContainer>
        <Heading>{heading}</Heading>
        <SubHeading>{subheading}</SubHeading>
      </TitlesContainer>
    </Container>
  );
};

export default Banner;
