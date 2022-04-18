import React, {ReactElement} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {SectionComponent} from '../../components/section/section.component';
import {
  ContentTitleComponent,
} from '../../components/content-title/content-title.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import Workshop from '../../../public/assets/images/workshop.jpg';

const Container = styled.div`
  height: 50em;
`;

const StyledImage = styled(Image)`
  transform: translateY(12em);
`;

const Bubbles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  padding-top: 6em;

  z-index: 100;

  overflow: hidden;
`;

export function ValuesModule(): ReactElement {
  return (
    <>
      <SectionComponent verticalPadding={4}>
        <Container>
          <ContentTitleComponent align="right">
            Mes Valeurs
          </ContentTitleComponent>

          <Bubbles>
            <BubbleComponent
              title="Fabrication locale Made in Loire"
              text="Avec mes artisans à proximités, mon empreinte carbone est faible et je peux facilement contrôler la fabrication."
              size={30}
              fontSize={1.7}
              x={5}
            />
            <BubbleComponent
              title="De la poésie"
              text="Je crée par les émotions et les souvenirs"
              size={14}
              fontSize={1.1}
              x={60}
              y={40}
            />
            <BubbleComponent
              title="Des objets uniques pour chacun"
              text="Personnalisable et sur-mesure pour vous !"
              size={20}
              fontSize={1.1}
              x={40}
              y={50}
            />

            <BubbleComponent
              title="Les matériaux sont français à 90%"
              text="Pour les 10% restants, j'ai les choisi, si possible, en fonction des labels environnementaux qu'ils respectent."
              size={25}
              fontSize={1.4}
              x={30}
              y={5}
            />
            <BubbleComponent
              text="Possibilités de conseils et d'un accompagnement en décoration avec votre commande."
              size={18}
              fontSize={1.2}
              x={35}
              y={25}
            />
            <BubbleComponent
              title="Des objets libres et multi-usages"
              size={16}
              fontSize={1.2}
              x={10}
              y={15}
            />
          </Bubbles>

          <StyledImage
            src={Workshop}
            alt="Workshop"
            layout="fill"
            objectFit="cover"
            objectPosition="0% 0%"
          />
        </Container>
      </SectionComponent>
    </>
  );
}
