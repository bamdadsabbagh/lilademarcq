import {Icon, IconifyIcon} from '@iconify/react';
import React, {useState} from 'react';
import {IMAGE_SETTINGS} from '../../../../constants';
import {LDImage} from '../../../../utils/fetch-object';
import {
  Back,
  Container,
  Front,
  StyledImage,
} from './social-button.component.styles';

interface SocialButtonComponentProps {
  href: string;
  alt: string;
  front: IconifyIcon;
  back: LDImage;
}

export function SocialButtonComponent({
  href,
  alt,
  front,
  back,
}: SocialButtonComponentProps): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <a
        href={href}
        aria-label={alt}
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
              alt={alt}
              objectFit="cover"
              width={IMAGE_SETTINGS.lowRes}
              height={IMAGE_SETTINGS.lowRes}
              placeholder="blur"
              blurDataURL={back.base64}
            />
          </Back>
        </Container>
      </a>
    </>
  );
}
