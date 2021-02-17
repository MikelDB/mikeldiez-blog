import React from 'react';
import Styled from 'styled-components';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = Styled.img<ImageProps>`
  width: 1em;
  height: 1em;
`;

type Props = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

const Icon: React.FC<Props> = ({
  href,
  src,
  alt,
  title,
}): React.ReactElement => {
  return (
    <a title={title} href={href}>
      <Image src={src} alt={alt} />
    </a>
  );
};

export default Icon;
