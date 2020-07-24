import { IconType } from '@graffft-waggle/icon';
import { CardProps } from '@graffft-waggle/card';

export const currentTechIcons = [
  IconType.JAVASCRIPT,
  IconType.TYPESCRIPT,
  IconType.REACT,
  IconType.ANGULAR,
  IconType.REDUX,
  IconType.JEST,
  IconType.STORYBOOK,
  IconType.DOCKER,
  IconType.K8S,
  IconType.GIT,
  IconType.CIRCLECI,
];

export const socialLinks = [
  {
    iconTitle: IconType.LINKEDIN,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://www.linkedin.com/in/dankreiger/',
  },
  {
    iconTitle: IconType.CODEPEN,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://codepen.io/dankreiger5/',
  },
  {
    iconTitle: IconType.STACKOVERFLOW,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://stackoverflow.com/users/3922099/dan-kreiger',
  },
  {
    iconTitle: IconType.GITHUB,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://github.com/dankreiger',
  },
  {
    iconTitle: IconType.GMAIL,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'mailto:dankreiger@gmail.com',
  },
];

export const dummyCardProps: CardProps = {
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
