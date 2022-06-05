import { IconType } from '@graffft-waggle/icon';
import { KopfHeaderNavItem } from '@graffft-waggle/kopf';
import {
  SocialBanner,
  SocialBannerDirection,
} from '@graffft-waggle/social-banner';
import { Colors } from '@graffft-waggle/themes-portfolio';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItemColors = {
  navItemColor: Colors.TextCopy,
  navItemHoverColor: Colors.Primary,
  // navItemBgHoverColor: 'rgba(32,33,36,0.04)',
};

const getNavlinkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: 'none',
  transition: 'color 250ms',
  color: isActive ? Colors.Primary : 'currentcolor',
});

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

let baseItems: KopfHeaderNavItem[] = [
  {
    navItem: (
      <NavLink style={getNavlinkStyle} to="/">
        Home
      </NavLink>
    ),
    key: 'home',
  },
  {
    navItem: (
      <NavLink style={getNavlinkStyle} to="projects">
        Projects
      </NavLink>
    ),
    key: 'projects',
  },
  {
    navItem: (
      <NavLink style={getNavlinkStyle} to="about">
        About
      </NavLink>
    ),
    key: 'about',
  },
  {
    navItem: (
      <NavLink style={getNavlinkStyle} to="contact">
        Contact
      </NavLink>
    ),
    key: 'contact',
  },
];

const items = baseItems.map((item) => ({
  ...item,
  ...navItemColors,
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
}));

export const sideNavItems = items.map((item) => ({
  ...item,
  navItemBgHoverColor: 'rgba(32,33,36,0.04)',
}));

export const headerNavItems = [
  ...items,
  {
    navItem: (
      <>
        <div style={{ marginLeft: '30px' }} />
        <SocialBanner
          buttonLinks={demoLinks}
          direction={SocialBannerDirection.VERTICAL}
          customScss="position: absolute; right: 10px; top: 15px; a { display: block; height: 30px; }"
          linkSize={30}
          paddingSize={6}
        />
      </>
    ),
    key: 'dog',
  },
];

export const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll, setShowScroll]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkScrollTop);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', checkScrollTop);
      }
    };
  }, [checkScrollTop]);

  return showScroll;
};
