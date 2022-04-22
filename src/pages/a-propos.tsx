import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../components/section/section.component';
import {
  ImageTextComponent,
} from '../components/image-text/image-text.component';
import {StyledMarkdownContainer} from '../pages-styles/a-propos.styles';
import {fetchSection, LDSection} from '../utils/fetch-section';

interface AProposProps {
  about: LDSection;
}

export default function APropos({about}: AProposProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <ImageTextComponent image={about.image.url} imageAlt="a">
          <StyledMarkdownContainer>
            <h2>{about.title}</h2>
            {documentToReactComponents(about.body.json)}
          </StyledMarkdownContainer>
        </ImageTextComponent>
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AProposProps>> {
  const about = await fetchSection('about');

  return {
    props: {
      about,
    },
  };
}
