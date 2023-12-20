import styled from 'styled-components';

interface LogoProps {
  children: JSX.Element;
  id: string;
  xmlns: string;
  viewBox: string;
}

export const Logo = styled.svg<LogoProps>`
  height: 100%;
  width: 50%;
`;

export const LogoContainer = styled.div`
  max-width: 100%;
  text-align: center;
`;
