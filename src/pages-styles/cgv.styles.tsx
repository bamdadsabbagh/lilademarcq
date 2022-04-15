import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const Content = styled.div`
  h2 {
    margin-top: 3em;
    font-weight: 500;
  }

  ul > li {
    list-style: disc;
    margin-left: 2em;
  }
`;
