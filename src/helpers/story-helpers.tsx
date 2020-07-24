import styled from 'styled-components';

export const PaletteWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface ColorItemProps {
  themeColor: string;
}
export const ColorItem = styled.div<ColorItemProps>`
  background: ${({ themeColor }) => themeColor};
  padding: 40px;
  border-radius: 5px;
  cursor: pointer;
  > div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 250ms;
    text-align: center;

    &:active {
      box-shadow: none;
    }
  }
`;

export const ColorLabel = styled.div`
  background: #fff;
  color: #000;
  padding: 10px;
`;
