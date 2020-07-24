import React from 'react';
import { Card } from './Card';
import { CardProps } from './types/Card.interfaces';

export default {
  title: 'Molecules/Drafts/Card',
  component: Card,
};

export const Example = (args: CardProps) => <Card {...args} />;

const exArgs: CardProps = {
  title: 'MeMedia',
  subtitle: 'Mercedes Benz',
  year: new Date().getFullYear(),
  category: 'Angular',
  subCategory: 'Frontend',
  imgSrc:
    'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg',
  imgAlt: 'puppy',
  cardBgColor: '#fff',
  buttonBgColor: '#FFAE19',
  buttonTextColor: '#fff',

  mainFontFamily: "'Barlow', sans-serif",
  categoryFontFamily: "'IBM Plex Mono', monospace",
};

Example.args = exArgs;
