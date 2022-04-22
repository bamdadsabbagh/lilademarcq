import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import {Bubbles, Container, Image} from './values.styles';
import {LDValues} from '../../utils/fetch-objects';

interface ValuesModuleProps {
  values: LDValues;
}

export function ValuesModule({values}: ValuesModuleProps): ReactElement {
  return (
    <>
      <SectionComponent verticalPadding={4}>
        <Container>
          <SectionTitleComponent align={AlignKeys.right}>
            Mes Valeurs
          </SectionTitleComponent>

          <Bubbles>
            <BubbleComponent
              title={values.topLeftTitle}
              text={values.topLeftBody}
              size={30}
              fontSize={1.7}
              x={5}
            />
            <BubbleComponent
              title={values.topCenterTitle}
              text={values.topCenterBody}
              size={14}
              fontSize={1.1}
              x={60}
              y={40}
            />
            <BubbleComponent
              title={values.topRightTitle}
              text={values.topRightBody}
              size={20}
              fontSize={1.1}
              x={40}
              y={50}
            />

            <BubbleComponent
              title={values.bottomLeftTitle}
              text={values.bottomLeftBody}
              size={25}
              fontSize={1.4}
              x={30}
              y={5}
            />
            <BubbleComponent
              title={values.bottomCenterTitle ?? ''}
              text={values.bottomCenterBody}
              size={18}
              fontSize={1.2}
              x={35}
              y={25}
            />
            <BubbleComponent
              title={values.bottomRightTitle}
              text={values.bottomRightBody ?? ''}
              size={16}
              fontSize={1.2}
              x={10}
              y={15}
            />
          </Bubbles>

          <Image
            src={values.image.url}
            alt="Workshop"
            layout="fill"
            objectFit="cover"
            objectPosition="0% 0%"
            priority
          />
        </Container>
      </SectionComponent>
    </>
  );
}
