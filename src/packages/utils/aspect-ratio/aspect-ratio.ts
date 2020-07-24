export const aspectPaddingBottom = (width: number, height: number): string =>
  `${(height / width) * 100}%`;

export const aspectRatio = (
  width: number,
  height: number,
  directChild = 'img'
): string => {
  return `
  overflow: hidden;
  position: relative;
  padding-bottom: ${aspectPaddingBottom(width, height)};

  > ${directChild} {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
};
