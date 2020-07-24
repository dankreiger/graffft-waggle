import React, { useState } from 'react';
import { ExpandableSideNav } from './index';
import {
  ExpandableSideNavProps,
  NavItem,
} from './types/ExpandableSideNav.interfaces';
import { Colors } from '@graffft-waggle/themes-portfolio';
export default {
  title: 'Molecules/ExpandableSideNav',
  component: ExpandableSideNav,
};

const navItemColors = {
  navItemColor: Colors.Primary,
  navItemHoverColor: '#006EDD',
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
};
const sideNavItems: NavItem[] = [
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#home">
        Home
      </a>
    ),
    ...navItemColors,
    key: 'home',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#projects">
        Projects
      </a>
    ),
    ...navItemColors,
    key: 'projects',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#about">
        About
      </a>
    ),
    ...navItemColors,
    key: 'about',
  },
  {
    navItem: (
      <a style={{ textDecoration: 'none' }} href="#contact">
        Contact
      </a>
    ),
    ...navItemColors,
    key: 'contact',
  },
];

export const Basic = (args: ExpandableSideNavProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      <button onClick={() => setIsExpanded(true)}>open me</button>
      <ExpandableSideNav
        {...args}
        sideNavLogo={<h3>Graffft Waggle</h3>}
        sideNavItems={sideNavItems}
        isExpanded={isExpanded}
        handleCloseSideNav={() => setIsExpanded(false)}
      />
    </>
  );
};

Basic.args = {};
