import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React, {useCallback, useState} from 'react';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {LDAward} from '../../utils/fetch-awards';
import {
  Award,
  ButtonContainer,
  Container,
  ImageContainer,
  TextContainer,
} from './awards.module.styles';

interface AwardsModuleProps {
  awards: LDAward[];
}

export function AwardsModule({awards}: AwardsModuleProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((o) => !o), []);

  return (
    <SectionComponent backgroundColor={theme.salmonLight}>
      <TitleComponent align={AlignKeys.center}>Mes distinctions</TitleComponent>

      <Container
        onClick={toggleOpen}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span />
        {awards.map((award) => (
          <Award
            key={award.slug}
            visible={isOpen}
          >
            <ImageContainer>
              <Image
                src={award.image.url}
                alt={award.slug}
                layout="responsive"
                width="100%"
                height="100%"
                placeholder="blur"
                blurDataURL={award.image.base64}
              />
            </ImageContainer>
            <TextContainer visible={isOpen}>
              {documentToReactComponents(award.body.json)}
            </TextContainer>
          </Award>
        ))}
        <span />
      </Container>

      <ButtonContainer onClick={toggleOpen}>
        <TriangleComponent
          color={theme.green}
          isBottom={!isOpen}
          isTop={isOpen}
          isHover={isHover}
        />
      </ButtonContainer>
    </SectionComponent>
  );
}
