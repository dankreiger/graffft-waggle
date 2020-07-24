import { mediaQuery, defaultBreakpoints } from '../media-query';

describe('mediaQuery', () => {
  it('returns default breakpoints if none are supplied', () => {
    const mq = mediaQuery();

    expect(mq.sm`color: red;`).toBe(
      `@media (min-width: ${defaultBreakpoints.sm}px) { color: red; }`
    );

    expect(mq.md`color: red;`).toBe(
      `@media (min-width: ${defaultBreakpoints.md}px) { color: red; }`
    );

    expect(mq.lg`color: red;`).toBe(
      `@media (min-width: ${defaultBreakpoints.lg}px) { color: red; }`
    );

    expect(mq.xl`color: red;`).toBe(
      `@media (min-width: ${defaultBreakpoints.xl}px) { color: red; }`
    );
  });

  it('returns default breakpoints if none are supplied', () => {
    const customBreakpoints = {
      sm: 320,
      md: 660,
      lg: 920,
      xl: 1100,
    };
    const mq = mediaQuery(customBreakpoints);

    expect(mq.sm`color: red;`).toBe(
      `@media (min-width: ${customBreakpoints.sm}px) { color: red; }`
    );

    expect(mq.md`color: red;`).toBe(
      `@media (min-width: ${customBreakpoints.md}px) { color: red; }`
    );

    expect(mq.lg`color: red;`).toBe(
      `@media (min-width: ${customBreakpoints.lg}px) { color: red; }`
    );

    expect(mq.xl`color: red;`).toBe(
      `@media (min-width: ${customBreakpoints.xl}px) { color: red; }`
    );
  });
});
