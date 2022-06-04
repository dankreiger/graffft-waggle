import { Breakpoint, defaultBreakpoints } from '@graffft-waggle/media-query';
import styled from 'styled-components';
import { defaultContainerMaxWidths } from './Container.constants';
import {
  ContainerGeneratorProps,
  ContainerStProps,
} from './Container.interfaces';

export const generateContainerCss = ({
  containerMaxWidths = defaultContainerMaxWidths,
  breakpoints = defaultBreakpoints,
  fullHeight = false,
}: ContainerGeneratorProps) => {
  let css = `
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: auto;
    margin-left: auto;
  `;
  if (fullHeight) {
    css += 'height: 100%;';
  }
  const keys = Object.keys(containerMaxWidths) as Breakpoint[];
  keys.forEach((key) => {
    if (breakpoints[key]) {
      css += `
        @media(min-width: ${breakpoints[key]}px) {
          max-width: ${containerMaxWidths[key]}px;
        }
      `;
    }
  });

  return css;
};

const ContainerSt = styled.div<ContainerStProps>`
  ${generateContainerCss as (props: ContainerGeneratorProps) => string}

  ${({ customScss }) => customScss};
`;

export const Container = ContainerSt;
