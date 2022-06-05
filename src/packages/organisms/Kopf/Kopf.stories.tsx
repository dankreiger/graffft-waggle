import { Container } from '@graffft-waggle/container';
import { IconType } from '@graffft-waggle/icon';
import {
  SocialBanner,
  SocialBannerDirection,
} from '@graffft-waggle/social-banner';
import { Colors } from '@graffft-waggle/themes-portfolio';
import React from 'react';
import { useNoStoryBookStyle } from '../../../helpers/story-hooks';
import { useMenuToggler } from './hooks';
import { Kopf } from './Kopf';
import { KopfHeaderNavItem, KopfProps } from './Kopf.interfaces';

export default {
  title: 'Organisms/Kopf',
  component: Kopf,
};

const navItemColors = {
  navItemColor: Colors.Primary,
  navItemHoverColor: '#006EDD',
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
};

const sideNavItemColors = {
  ...navItemColors,
  navItemColor: Colors.TextLead,
  navItemHoverColor: Colors.TextCopy,
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
};

let baseItems: KopfHeaderNavItem[] = [
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#home">
        Home
      </a>
    ),
    key: 'home',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#projects">
        Projects
      </a>
    ),
    key: 'projects',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#about">
        About
      </a>
    ),
    key: 'about',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#contact">
        Contact
      </a>
    ),
    key: 'contact',
  },
];

const headerNavItems = baseItems.map((item) => ({
  ...item,
  ...navItemColors,
}));

const sideNavItems = baseItems.map((item) => ({
  ...item,
  ...sideNavItemColors,
}));

export const Basic = (args: KopfProps) => {
  const { handleToggleMobileMenu, handleCloseMobileMenu, mobileMenuOpen } =
    useMenuToggler();

  useNoStoryBookStyle();

  return (
    <>
      <Kopf
        {...args}
        mobileMenuOpen={mobileMenuOpen}
        handleToggleMobileMenu={handleToggleMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

      <Container>
        <div style={{ marginTop: '30px' }}>
          <h1 style={{ margin: '0' }}>page headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan elit vitae arcu volutpat, tincidunt faucibus elit iaculis.
            Praesent rhoncus, metus et blandit suscipit, nibh est varius dolor,
            in dignissim turpis purus ut diam. Sed at feugiat diam. Mauris velit
            sapien, tempus in erat et, sagittis tristique felis. Maecenas nec
            tincidunt ex.
          </p>
        </div>
      </Container>
    </>
  );
};

const args: KopfProps = {
  headerLogo: (
    <a href="#d" style={{ color: Colors.Primary, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  sideNavLogo: (
    <a href="#w" style={{ color: Colors.Primary, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  headerNavItems,
  sideNavItems,
  customScss: "font-family: 'Barlow', sans-serif;",
  headerBurgerColor: Colors.Primary,
};

const demoLinks = [
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

Basic.args = args;

export const MoreStuff = (args: KopfProps) => {
  const menuProps = useMenuToggler();
  const props = { ...args, ...menuProps };
  useNoStoryBookStyle();

  return <Kopf {...props} />;
};

const argsDog: KopfProps = {
  headerLogo: (
    <a href="#s" style={{ color: Colors.TextCopy, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  sideNavLogo: (
    <a href="#a" style={{ color: Colors.Primary, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  headerBackgroundColor: Colors.Secondary,
  sideNavItems,
  headerNavItems: [
    ...headerNavItems,
    {
      navItem: (
        <>
          <div style={{ marginLeft: '30px' }} />
          <SocialBanner
            buttonLinks={demoLinks}
            linkSize={30}
            paddingSize={6}
            direction={SocialBannerDirection.VERTICAL}
            customScss={`position: absolute; right: 20px; top: 15px;`}
          />
        </>
      ),
      key: 'dog',
    },
  ],
};

MoreStuff.args = argsDog;

export const DefaultMobileMenu = (args: KopfProps) => {
  const props = { ...args };
  useNoStoryBookStyle();

  return <Kopf {...props} />;
};

const argsDefaultMobileMenu: KopfProps = {
  headerLogo: (
    <a href="#s" style={{ color: Colors.TextCopy, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  sideNavLogo: (
    <a href="#a" style={{ color: Colors.Primary, textDecoration: 'none' }}>
      Graffft Waggle
    </a>
  ),
  headerBackgroundColor: Colors.Secondary,
  sideNavItems,
  headerNavItems: [
    ...headerNavItems,
    {
      navItem: (
        <>
          <div style={{ marginLeft: '30px' }} />
          <SocialBanner
            buttonLinks={demoLinks}
            linkSize={30}
            paddingSize={6}
            direction={SocialBannerDirection.VERTICAL}
            customScss={`position: absolute; right: 20px; top: 15px;`}
          />
        </>
      ),
      key: 'dog',
    },
  ],
};

DefaultMobileMenu.args = argsDefaultMobileMenu;
