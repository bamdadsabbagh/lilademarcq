import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {useAppLayout} from './hooks/use-default-layout';
import {MetaComponent} from '../../components/meta/meta.component';

const Wrapper = styled.div`
  width: 100%;
`;

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  const {isReady} = useAppLayout();

  return (
    <>
      {!customMeta && <MetaComponent />}
      {isReady && (
        <>
          <Wrapper>
            {children}
          </Wrapper>
        </>
      )}
    </>
  );
}
