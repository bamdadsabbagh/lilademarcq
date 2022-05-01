import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import {Container} from './video.component.styles';
import {buildSvgPlaceholder} from '../../utils/build-svg-placeholder';
import {useVideoComponent} from './hooks/use-video-component';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

interface VideoComponentProps {
  url: string;
  width: number;
  height: number;
}

export function VideoComponent({
  url,
  width,
  height,
}: VideoComponentProps): ReactElement {
  const {ref, isPlaying} = useVideoComponent();

  return (
    <>
      <Container
        ref={ref}
        width={width}
        height={height}
      >
        <ReactPlayer
          url={url}
          width={width}
          height={height}
          playing={isPlaying}
          loop
          controls={false}
          volume={0}
          fallback={<>{buildSvgPlaceholder(width, height)}</>}
        />
      </Container>
    </>
  );
}
