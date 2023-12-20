import React, {useCallback, useMemo, useState} from 'react';
import {theme} from '../../app/styles/theme';
import {GridComponent} from '../../components/grid/grid.component';
import {LinkComponent} from '../../components/link/link.component';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {useLightbox} from '../../hooks/use-lightbox';
import {buildNextImageUrl} from '../../utils/build-next-image-url';
import {LDMyPress, LDPress} from '../../utils/fetch-my-press';
import {Button, LinkContainer} from './press.layout.styles';

interface PressLayoutProps {
  myPress: LDMyPress;
}

export function PressLayout({myPress}: PressLayoutProps): JSX.Element {
  const hasPaper = useMemo(
    () =>
      myPress?.paperTitle !== null &&
      myPress?.paperNewsCollection?.items.length > 0,
    [myPress],
  );
  const hasDigital = useMemo(
    () =>
      myPress?.digitalTitle !== null &&
      myPress?.digitalNewsCollection?.items.length > 0,
    [myPress],
  );
  const [lightboxData, setLightboxData] = useState([]);

  useLightbox(lightboxData);

  const handleClick = useCallback((press: LDPress) => {
    const images = press.imagesCollection.items;
    setLightboxData(
      images.map((image) => ({
        src: buildNextImageUrl(image.url),
        width: image.width,
        height: image.height,
      })),
    );
  }, []);

  const adaptPressToTile = useCallback(
    (press: LDPress) => ({
      image: {
        src: press.thumbnail.url,
        blur: press.thumbnail.base64,
      },
      onClick: () => handleClick(press),
      h3: press.title,
      span: press.description,
    }),
    [handleClick],
  );

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent
          align={AlignKeys.center}
          isMain
        >
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
            tiles={myPress.paperNewsCollection.items.map(adaptPressToTile)}
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
            tiles={myPress.digitalNewsCollection.items.map(adaptPressToTile)}
          />
        </SectionComponent>
      )}
    </>
  );
}
