import React from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {LDValues} from '../../utils/fetch-values';
import {BubbleComponent} from './components/bubble/bubble.component';
import {Bubbles, Image} from './values.module.styles';

interface ValuesModuleProps {
  values: LDValues;
}

export function ValuesModule({values}: ValuesModuleProps): JSX.Element {
  return (
    <>
      <SectionComponent
        isHero
        minHeight="50em"
      >
        <TitleComponent align={AlignKeys.right}>Mes Valeurs</TitleComponent>

        <Bubbles>
          <BubbleComponent
            title={values.topLeftTitle ?? ''}
            text={values.topLeftBody ?? ''}
            size={18}
            x={5}
          />
          <BubbleComponent
            title={values.topCenterTitle ?? ''}
            text={values.topCenterBody ?? ''}
            size={12}
            x={40}
            y={30}
          />
          <BubbleComponent
            title={values.topRightTitle ?? ''}
            text={values.topRightBody ?? ''}
            size={16}
            x={35}
            y={40}
          />

          <BubbleComponent
            title={values.bottomLeftTitle ?? ''}
            text={values.bottomLeftBody ?? ''}
            size={17}
            x={20}
            y={5}
          />
          <BubbleComponent
            title={values.bottomCenterTitle ?? ''}
            text={values.bottomCenterBody ?? ''}
            size={16}
            x={15}
            y={30}
          />
          <BubbleComponent
            title={values.bottomRightTitle ?? ''}
            text={values.bottomRightBody ?? ''}
            size={13}
            x={20}
            y={30}
          />
        </Bubbles>

        <Image
          src={values.image.url}
          alt="Workshop"
          layout="fill"
          objectFit="cover"
          objectPosition="25% 0%"
          placeholder="blur"
          blurDataURL={values.image.base64}
        />
      </SectionComponent>
    </>
  );
}
