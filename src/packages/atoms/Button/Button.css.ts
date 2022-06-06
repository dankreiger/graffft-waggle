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
      background-color: #fff;
      color: ${rest[variant]};

      &:hover {
        background-color: rgba(25, 118, 210, 0.04);
        color: ${Color(rest[variant]).lighten(0.1).hex()};
      }
      &:active {
        background-color: rgba(25, 118, 210, 0.1);
        color: ${rest[variant]};
        color: ${Color(rest[variant]).darken(0.1).hex()};
      }
      &:disabled {
        background-color: rgba(25, 118, 210, 0.2);
        color: ${Color(rest[variant]).lighten(0.4).hex()};
      }
    `}

  ${({ isSelected, activeBackgroundColor }) =>
    isSelected &&
    activeBackgroundColor &&
    css`
      background-color: ${activeBackgroundColor};
    `}

    ${({ isSelected, activeColor, variant, ...rest }) =>
    isSelected &&
    css`
      background-color: ${activeColor || rest[variant]};
    `}



    min-height: ${({ minHeight }) => minHeight || '55px'};
  height: ${({ buttonHeight }) => buttonHeight};
  width: ${({ buttonWidth }) => buttonWidth};
  border-radius: 5px;
  padding: ${({ padding }) => padding || '8px 16px'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
