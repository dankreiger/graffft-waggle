import Color from 'color';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types/Button.interfaces';

const colorCache: Record<
  'primary' | 'secondary',
  {
    negate?: string;
    darken?: string;
    lighten?: string;
  }
> = {
  primary: {
    negate: undefined,
    darken: undefined,
    lighten: undefined,
  },
  secondary: {
    negate: undefined,
    darken: undefined,
    lighten: undefined,
  },
};
const getColor =
  (method: 'negate' | 'darken' | 'lighten', ratio: number) =>
  (props: ButtonProps) => {
    const variant = props.variant || 'primary';
    const cached = colorCache[variant][method];
    if (cached) return cached;
    const newColor = Color(props[variant])?.[method]?.(ratio).hex();
    colorCache[variant][method] = newColor;

    return newColor;
  };

export const ButtonSt = styled.button<ButtonProps>`
  background-color: ${(props) => props[props.variant]};
  color: ${(props) =>
    Color(props[props.variant]).isLight() ? '#000' : '#fff'};
  border: ${({ borderWidth }) => `${borderWidth} solid transparent`};
  font-weight: 400;

  &:hover {
    background-color: ${getColor('darken', 0.1)};
    color: ${(props) =>
      Color(props[props.variant]).isLight() ? '#000' : '#fff'};
  }
  &:active {
    background-color: ${getColor('lighten', 0.8)};
    color: ${(props) =>
      Color(props[props.variant]).isLight() ? '#000' : '#fff'};
  }
  &:disabled {
    background-color: ${getColor('lighten', 0.4)};
    color: ${(props) => Color(getColor('lighten', 0.4)(props)).negate().hex()};
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${getColor('lighten', 0.4)};
      color: ${Color(getColor('lighten', 0.4)(props)).negate().hex()};
      pointer-events: none;
    `}

  ${({ isOutline, borderWidth, variant, ...rest }) =>
    isOutline &&
    css`
      border: ${borderWidth} solid ${rest[variant]};
      background-color: transparent;
      color: rest[variant];

      &:hover {
        background-color: transparent;
        color: ${Color(rest[variant]).lighten(0.1).hex()};
      }
      &:active {
        background-color: transparent;
        color: ${rest[variant]};
        color: ${Color(rest[variant]).darken(0.1).hex()};
      }
      &:disabled {
        background-color: transparent;
        color: ${Color(rest[variant]).lighten(0.4).hex()};
      }
    `}

  ${({ isSelected, activeBackgroundColor }) =>
    isSelected &&
    activeBackgroundColor &&
    css`
      background-color: ${activeBackgroundColor};
    `}

    ${({ isSelected, activeColor }) =>
    isSelected &&
    activeColor &&
    css`
      background-color: ${activeColor};
    `}



    min-height: ${({ minHeight }) => minHeight || '55px'};
  height: ${({ buttonHeight }) => buttonHeight};
  width: ${({ buttonWidth }) => buttonWidth};
  border-radius: 5px;
  padding: ${({ padding }) => padding || '8px 16px'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
