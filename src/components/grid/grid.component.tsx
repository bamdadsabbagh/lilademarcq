import React, {ReactElement} from 'react';
import {GridBody, GridContainer} from './grid.component.styles';

interface GridComponentProps {
  children: ReactElement[];
}

export function GridComponent({children}: GridComponentProps): ReactElement {
  return (
    <>
      <GridContainer>
        <GridBody>
          {children}
        </GridBody>
      </GridContainer>
    </>
  );
}
