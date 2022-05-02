import React, {ReactElement, useState} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import {
  Back,
  Container,
  Front,
  StyledImage,
} from './social-button.component.styles';
import {LDImage} from '../../../../utils/fetch-object';

interface SocialButtonComponentProps {
  href: string;
  front: IconifyIcon;
  back: LDImage;
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
              src={back.url}
              objectFit="cover"
              width="100%"
              height="100%"
              placeholder="blur"
              blurDataURL={back.base64}
            />
          </Back>
        </Container>
      </a>
    </>
  );
}
