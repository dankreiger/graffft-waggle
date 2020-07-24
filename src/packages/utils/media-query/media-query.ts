import { Breakpoint, Breakpoints } from './types/media-query.types';

export const defaultBreakpoints: Breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mediaQuery = (breakpoints: Breakpoints = defaultBreakpoints) => {
  return (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
    (acc, key) => {
      acc[key] = (style: string) =>
        `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
      return acc;
    },
    {} as { [key in Breakpoint]: Function }
  );
};
