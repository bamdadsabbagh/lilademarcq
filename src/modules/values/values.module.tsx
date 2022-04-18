import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {BubbleComponent} from './components/bubble/bubble.component';
import Workshop from '../../../public/assets/images/workshop.jpg';
import {Bubbles, Container, Image} from './values.styles';

export function ValuesModule(): ReactElement {
  return (
    <>
      <SectionComponent verticalPadding={4}>
        <Container>
          <SectionTitleComponent align="right">
            Mes Valeurs
          </SectionTitleComponent>

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

          <Image
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
