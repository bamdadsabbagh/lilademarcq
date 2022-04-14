import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {StaticImageData} from 'next/image';
import instagramWithCircle
  from '@iconify/icons-entypo-social/instagram-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import linkedinWithCircle
  from '@iconify/icons-entypo-social/linkedin-with-circle';
import {theme} from '../app/styles/theme';
import {FormComponent} from '../components/form/form.component';
import {ContactComponent} from '../components/contact/contact.component';
import {SectionComponent} from '../components/section/section.component';
import {TitleComponent} from '../components/title/title.component';
import {ListComponent} from '../components/list/list.component';
import {
  TextImageComponent,
} from '../components/text-image/text-image.component';
import Object01Image from '../../public/images/object-01.png';
import Object02Image from '../../public/images/object-02.png';
import Object03Image from '../../public/images/object-03.png';
import Object04Image from '../../public/images/object-04.png';
import Object05Image from '../../public/images/object-05.png';
import Object06Image from '../../public/images/object-06.png';
import PortraitImage from '../../public/images/portrait.jpg';
import {
  ProductTileComponent,
} from '../components/product-tile/product-tile.component';
import {CenterComponent} from '../components/center/center.component';
import {
  SocialButtonComponent,
} from '../components/social-button/social-button.component';

interface Product {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

interface IndexPageProps {
  products: Product[];
}

export default function Index({products}: IndexPageProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <TitleComponent>
          Objets design
        </TitleComponent>
        <ListComponent>
          {products.map((product) => <ProductTileComponent
            key={product.href}
            image={product.image}
            title={product.title}
            description={product.description}
            href={product.href}
          />)}
        </ListComponent>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align="center">
          Artiste, designer et poétesse
        </TitleComponent>
        <TextImageComponent
          alt="portrait"
          image={PortraitImage}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer
        </TextImageComponent>
      </SectionComponent>

      <SectionComponent>
        <TitleComponent align="right">
          Mes valeurs
        </TitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align="left">
          Mes distinctions
        </TitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent>
        <CenterComponent>
          <SocialButtonComponent
            href="https://www.instagram.com/lila.demarcq"
            front={instagramWithCircle}
            back={Object01Image}
          />
          <SocialButtonComponent
            href="https://www.facebook.com/lilademarcq"
            front={facebookIcon}
            back={Object02Image}
          />
          <SocialButtonComponent
            href="https://www.linkedin.com/in/lila-demarcq"
            front={linkedinWithCircle}
            back={Object03Image}
          />
        </CenterComponent>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.green}>
        <FormComponent />
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <ContactComponent />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{products: Product[];}>> {
  const products = [
    {
      image: Object01Image,
      title: 'INDLU',
      description: 'Portant et créateur d\'espaces',
      href: '/objets/indlu',
    },
    {
      image: Object02Image,
      title: 'isiqu',
      description: 'Le canapé hybride',
      href: '/objets/isiqu',
    },
    {
      image: Object03Image,
      title: 'isihla',
      description: 'Une oeuvre-persienne',
      href: '/objets/isihla',
    },
    {
      image: Object04Image,
      title: 'sa-poro',
      description: 'Le nouveau Senufo',
      href: '/objets/sa-poro',
    },
    {
      image: Object05Image,
      title: 'usha',
      description: 'La finesse de l\'acier',
      href: '/objets/usha-acier',
    },
    {
      image: Object06Image,
      title: 'usha',
      description: 'La douceur du papier',
      href: '/objets/usha-papier',
    },
  ];

  return {
    props: {products},
  };
}
