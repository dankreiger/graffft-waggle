import React from 'react';
import { CardProps } from './types/Card.interfaces';
import {
  CardWrapperSt,
  CardTitleSt,
  CardYearSt,
  CardSubtitleSt,
  CardImageSt,
  CardSubCategorySt,
  CardCategorySt,
  CardButtonSt,
} from './Card.styles';
import { Image } from '@graffft-waggle/image';
import { defaultBreakpoints } from '@graffft-waggle/media-query';

// ROUGH DRAFT ATTEMPT WITH CSS GRID
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  year,
  category,
  subCategory,
  desktopMinWidth = defaultBreakpoints.md,
  imgSrc,
  imgAlt,
  cardBgColor,
  buttonBgColor,
  buttonTextColor,
  mainFontFamily,
  categoryFontFamily,
}) => (
  <CardWrapperSt
    desktopMinWidth={desktopMinWidth}
    cardBgColor={cardBgColor}
    mainFontFamily={mainFontFamily}
  >
    <CardTitleSt desktopMinWidth={desktopMinWidth}>{title}</CardTitleSt>
    <CardYearSt desktopMinWidth={desktopMinWidth}>{year}</CardYearSt>
    <CardSubtitleSt desktopMinWidth={desktopMinWidth}>
      {subtitle}
    </CardSubtitleSt>

    <CardImageSt desktopMinWidth={desktopMinWidth}>
      <Image
        aspectRatio={{
          width: 258,
          height: 147,
        }}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
    </CardImageSt>
    <CardSubCategorySt desktopMinWidth={desktopMinWidth}>
      {subCategory}
    </CardSubCategorySt>
    <CardCategorySt
      desktopMinWidth={desktopMinWidth}
      categoryFontFamily={categoryFontFamily}
    >
      {category}
    </CardCategorySt>
    <CardButtonSt
      buttonBgColor={buttonBgColor}
      buttonTextColor={buttonTextColor}
      desktopMinWidth={desktopMinWidth}
    >
      <button>&#8594;</button>
    </CardButtonSt>
  </CardWrapperSt>
);
