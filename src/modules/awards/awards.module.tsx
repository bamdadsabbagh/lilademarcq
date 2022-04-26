import React, {ReactElement, useCallback, useState} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {
  Award,
  ButtonContainer,
  Container,
  TextContainer,
} from './awards.styles';
import {LDAward} from '../../utils/fetch-awards';
import {TriangleComponent} from '../../components/triangle/triangle.component';

export interface AwardsModuleProps {
  awards: LDAward[];
}

export function AwardsModule({
  awards,
}: AwardsModuleProps): ReactElement {
  const [size] = useState(250);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((o) => !o), []);

  return (
    <SectionComponent backgroundColor={theme.salmonLight}>
      <SectionTitleComponent align={AlignKeys.left}>
        Mes distinctions
      </SectionTitleComponent>

      <Container
        onClick={toggleOpen}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {awards.map((award) => (
          <Award imageHeight={size} key={award.slug}>
            <div>
              <Image
                src={award.image.url}
                alt={award.slug}
                layout="fixed"
                width={size}
                height={size}
              />
            </div>
            <TextContainer visible={isOpen}>
              {documentToReactComponents(award.body.json)}
            </TextContainer>
          </Award>

        ))}
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
