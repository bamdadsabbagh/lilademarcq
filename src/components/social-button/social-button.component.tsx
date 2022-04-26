import React, {ReactElement, useState} from 'react';
import {IconifyIcon} from '@iconify/react';
import {Container, Icon, StyledImage} from './social-button.styles';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Container isOpen={!isOpen}>
          <Icon icon={front} />
        </Container>
        <Container isOpen={isOpen}>
          <StyledImage
            src={back}
            objectFit="cover"
            width={150}
            height={150}
          />
        </Container>
      </a>
    </>
  );
}
