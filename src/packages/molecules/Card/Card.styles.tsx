import styled, { css } from 'styled-components';

export const CardWrapperSt = styled.div<{
  desktopMinWidth: number;
  cardBgColor: string;
  mainFontFamily: string;
}>`
  display: grid;
  grid-template-rows: 15fr 16fr auto 16fr 15fr;
  grid-template-columns: 2fr 1fr;

  grid-template-areas:
    'title       title year'
    'subtitle    subtitle subtitle'
    'image       image image'
    'subcategory subcategory button'
    'category    category button';

  box-sizing: border-box;
  align-items: center;
  padding: 15px 20px;
  background-color: ${({ cardBgColor }) => cardBgColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-family: ${({ mainFontFamily }) => mainFontFamily};

  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      grid-template-areas:
        'title        image button'
        'subtitle     image button'
        'year         image button'
        'subcategory  image button'
        'category     image button';

      grid-template-rows: 4fr 5fr 9fr 5fr 4fr;
      grid-template-columns: 24% 1fr 11%;
      row-gap: 0px;
      column-gap: 5.5%;

      padding: 2.5%;
    }
  `}
`;

export const CardTitleSt = styled.div<{ desktopMinWidth: number }>`
  grid-area: title;
  font-size: 22px;
  font-weight: 700;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      font-size: 30px;
      line-height: 40px;
    }
  `}
`;
export const CardSubtitleSt = styled.div<{ desktopMinWidth: number }>`
  grid-area: subtitle;
  font-weight: 500;

  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      font-size: 25px;
      line-height: 33px;
    }
  `}
`;
export const CardYearSt = styled.div<{ desktopMinWidth: number }>`
  grid-area: year;
  font-size: 18px;
  justify-self: end;
  font-weight: 500;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      justify-self: start;
      align-self: start;
      font-size: 25px;
      line-height: 33px;
    }
  `}
`;

export const CardImageSt = styled.div<{ desktopMinWidth: number }>`
  grid-area: image;
  overflow: hidden;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      margin-left: 1%;
    }
  `}
`;
export const CardSubCategorySt = styled.div<{
  desktopMinWidth: number;
}>`
  grid-area: subcategory;
  font-size: 16px;
  font-weight: 500;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      font-size: 21px;
      line-height: 27px;
      justify-self: end;
    }
  `}
`;
export const CardCategorySt = styled.div<{
  desktopMinWidth: number;
  categoryFontFamily: string;
}>`
  grid-area: category;
  font-size: 16px;
  font-family: ${({ categoryFontFamily }) => categoryFontFamily};
  font-weight: 700;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      font-size: 21px;
      line-height: 32px;
      justify-self: end;
    }
  `}
`;
export const CardButtonSt = styled.div<{
  buttonBgColor: string;
  buttonTextColor: string;
  desktopMinWidth: number;
}>`
  grid-area: button;
  justify-self: end;
  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      display: flex;
      align-items: center;
      justify-self: center;
    }
  `}
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 36px;
    height: 36px;
    font-size: 16px;
    padding: 0;
    padding-bottom: 5px;
    border: none;
    background-color: ${({ buttonBgColor }) => buttonBgColor};
    color: ${({ buttonTextColor }) => buttonTextColor};
    ${({ desktopMinWidth }) => css`
      @media (min-width: ${desktopMinWidth}px) {
        width: 52px;
        height: 52px;
        font-size: 32px;
      }
    `}
  }
`;
