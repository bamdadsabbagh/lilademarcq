import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2em;
`;

export function HeroComponent(): ReactElement {
  return (
    <>
      <StyledSection>
        <div>
          <div className="l-hero__image">
            <img
              alt="hero"
              src="https://images.unsplash.com/photo-1613209476491-97cd142882d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80"
            />
          </div>
          <div className="l-hero__dot">
            <span />
            <span />
            <span />
          </div>
          <div className="l-hero__triangle right" />
          <div className="l-hero__triangle left" />
          <div className="l-hero__footer" />
        </div>
      </StyledSection>
    </>
  );
}
