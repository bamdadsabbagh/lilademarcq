import React, {ReactElement, useState} from 'react';
import {StaticImageData} from 'next/image';
import {IconifyIcon} from '@iconify/react';
import {
  StyledContainer,
  StyledIcon,
  StyledImage,
} from './social-button.styles';

interface SocialButtonComponentProps {
  href: string;
  front: IconifyIcon;
  back: StaticImageData;
}

export function SocialButtonComponent({
  href,
  front,
  back,
}: SocialButtonComponentProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledContainer
          display={!isHovered ? 1 : 0}
        >
          <StyledIcon icon={front} />
        </StyledContainer>
        <StyledContainer
          display={isHovered ? 1 : 0}
        >
          <StyledImage
            src={back}
            objectFit="cover"
            width={150}
            height={150}
          />
        </StyledContainer>
      </a>
    </>
  );
}
