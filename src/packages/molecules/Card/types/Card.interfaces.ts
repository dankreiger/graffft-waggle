type CardTextContent = string | number | JSX.Element;

export interface CardProps {
  title: CardTextContent;
  subtitle: CardTextContent;
  year: CardTextContent;
  category: CardTextContent;
  subCategory: CardTextContent;

  /**
   * @default 768
   */
  desktopMinWidth?: number;

  imgSrc: string;
  imgAlt: string;

  cardBgColor: string;
  buttonBgColor: string;
  buttonTextColor: string;

  mainFontFamily: string;
  categoryFontFamily: string;
}
