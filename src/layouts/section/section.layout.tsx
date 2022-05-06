import React, {ReactElement} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {LDSection} from '../../utils/fetch-section';
import {DefaultLayout} from '../default/default.layout';
import {SectionComponent} from '../../components/section/section.component';
import {theme} from '../../app/styles/theme';
import {Paragraph, Title} from './section.layout.styles';

interface SectionLayoutProps {
  section: LDSection;
}

export function SectionLayout({section}: SectionLayoutProps): ReactElement {
  return (
    <>
      <DefaultLayout>
        <SectionComponent backgroundColor={theme.salmonLight}>
          <>
            <Title>
              {section.title}
            </Title>
            <Paragraph>
              {documentToReactComponents(section.body.json)}
            </Paragraph>
          </>
        </SectionComponent>
      </DefaultLayout>

    </>
  );
}
