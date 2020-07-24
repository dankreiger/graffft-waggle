export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = {
  [key in Breakpoint]: number;
};
