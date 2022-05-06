import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import {LDMyPress, LDPress} from '../../utils/fetch-my-press';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {theme} from '../../app/styles/theme';
import {LinkComponent} from '../../components/link/link.component';
import {GridComponent} from '../../components/grid/grid.component';
import {useLightbox} from '../../hooks/use-lightbox';
import {buildNextImageUrl} from '../../utils/build-next-image-url';
import {Button, LinkContainer} from './press.layout.styles';

interface PressLayoutProps {
  myPress: LDMyPress;
}

export function PressLayout({
  myPress,
}: PressLayoutProps): ReactElement {
  const hasPaper = useMemo(() => myPress?.paperTitle !== null && myPress?.paperNewsCollection?.items.length > 0, [myPress]);
  const hasDigital = useMemo(() => myPress?.digitalTitle !== null && myPress?.digitalNewsCollection?.items.length > 0, [myPress]);
  const [lightboxData, setLightboxData] = useState([]);

  useLightbox(lightboxData);

  const handleClick = useCallback((press: LDPress) => {
    const images = press.imagesCollection.items;
    setLightboxData(images.map((image) => ({
      src: buildNextImageUrl(image.url),
      width: image.width,
      height: image.height,
    })));
  }, []);

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align={AlignKeys.center}>
          {myPress.headlineTitle}
        </TitleComponent>
        <LinkContainer>
          <LinkComponent href={myPress.headlineReleasePdf.url}>
            <Button backgroundColor={theme.salmonLight}>
              {myPress.headlineReleaseText}
            </Button>
          </LinkComponent>
        </LinkContainer>
      </SectionComponent>

      {hasPaper && (
        <SectionComponent>
          <TitleComponent align={AlignKeys.right}>
            {myPress.paperTitle}
          </TitleComponent>
          <GridComponent
            isFull
            tiles={myPress.paperNewsCollection.items.map((press) => ({
              image: {
                src: press.thumbnail.url,
                blur: press.thumbnail.base64,
              },
              onClick: () => handleClick(press),
              h3: press.title,
              span: press.description,
            }))}
          />
        </SectionComponent>
      )}

      {hasDigital && (
        <SectionComponent backgroundColor={theme.salmonLight}>
          <TitleComponent align={AlignKeys.left}>
            {myPress.digitalTitle}
          </TitleComponent>
          <GridComponent
            isFull
            tiles={myPress.digitalNewsCollection.items.map((press) => ({
              image: {
                src: press.thumbnail.url,
                blur: press.thumbnail.base64,
              },
              onClick: () => handleClick(press),
              h3: press.title,
              span: press.description,
            }))}
          />
        </SectionComponent>
      )}
    </>
  );
}
