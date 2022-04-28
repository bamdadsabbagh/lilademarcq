import React, {ReactElement, useState} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import {Back, Container, Front, StyledImage} from './social-button.styles';

interface SocialButtonComponentProps {
  href: string;
  front: IconifyIcon;
  back: string;
}

export function SocialButtonComponent({
  href,
  front,
  back,
}: SocialButtonComponentProps): ReactElement {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Container>
          <Front visible={!isHover}>
            <Icon icon={front} />
          </Front>
          <Back visible={isHover}>
            <StyledImage
              src={back}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Back>
        </Container>
      </a>
    </>
  );
}
