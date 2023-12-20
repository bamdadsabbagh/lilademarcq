import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import React from 'react';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {LDSection} from '../../utils/fetch-section';
import {DefaultLayout} from '../default/default.layout';
import {Paragraph, Title} from './section.layout.styles';

interface SectionLayoutProps {
  section: LDSection;
}

export function SectionLayout({section}: SectionLayoutProps): JSX.Element {
  return (
    <>
      <DefaultLayout>
        <SectionComponent backgroundColor={theme.salmonLight}>
          <>
            <Title>{section.title}</Title>
            <Paragraph>
              {documentToReactComponents(section.body.json)}
            </Paragraph>
          </>
        </SectionComponent>
      </DefaultLayout>
    </>
  );
}
