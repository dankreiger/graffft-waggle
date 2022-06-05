import { Container } from '@graffft-waggle/container';
import { Colors } from '@graffft-waggle/themes-portfolio';
import React from 'react';
import { KopfHeaderNavItem } from './Kopf.interfaces';

const navItemColors = {
  navItemColor: Colors.Primary,
  navItemHoverColor: '#006EDD',
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
};

export const baseItems: KopfHeaderNavItem[] = [
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

export const headerNavItems = baseItems.map((item) => ({
  ...item,
  ...navItemColors,
}));

export const DummyBody = () => (
  <>
    <Container>
      <div style={{ marginTop: '30px' }}>
        <h1 style={{ margin: '0' }}>page headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          accumsan elit vitae arcu volutpat, tincidunt faucibus elit iaculis.
          Praesent rhoncus, metus et blandit suscipit, nibh est varius dolor, in
          dignissim turpis purus ut diam. Sed at feugiat diam. Mauris velit
          sapien, tempus in erat et, sagittis tristique felis. Maecenas nec
          tincidunt ex.
        </p>
      </div>
    </Container>
  </>
);
