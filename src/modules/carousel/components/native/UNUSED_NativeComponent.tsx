import React, {ReactElement} from 'react';
import {
  NativeContainer,
  NativeImage,
  Placeholder,
} from './native.component.styles';
import {buildSvgPlaceholder} from '../../../../utils/build-svg-placeholder';

export function UNUSED_NativeComponent(): ReactElement {
  return (
    <>
      <NativeContainer>
        <NativeImage
          src="url"
          alt=""
          width={100}
          height={100}
        />
        <Placeholder>
          <img
            alt=""
            aria-hidden
            src={buildSvgPlaceholder(100, 100)}
          />
        </Placeholder>
      </NativeContainer>
    </>
  );
}
