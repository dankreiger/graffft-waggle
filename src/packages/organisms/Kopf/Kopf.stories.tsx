import { Colors } from '@graffft-waggle/themes-portfolio';
import React from 'react';
import { useNoStoryBookStyle } from '../../../helpers/story-hooks';
import { useMenuToggler } from './hooks';
import { Kopf } from './Kopf';
import { KopfHeaderLogoPostion } from './Kopf.enums';
import { KopfProps } from './Kopf.interfaces';
import { DummyBody, headerNavItems } from './story-helpers';

export default {
  title: 'Organisms/Kopf',
  component: Kopf,
};

export const LogoRight = (args: KopfProps) => {
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
      <DummyBody />
    </>
  );
};

const rightArgs: KopfProps = {
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
  // sideNavItems,
  customScss: "font-family: 'Barlow', sans-serif;",
  headerBurgerColor: Colors.Primary,
};

LogoRight.args = rightArgs;

export const LogoLeft = (args: KopfProps) => {
  const props = { ...args };
  useNoStoryBookStyle();

  return (
    <>
      <Kopf {...props} />
      <DummyBody />
    </>
  );
};

const leftArgs: KopfProps = {
  ...rightArgs,
  headerLogoPosition: KopfHeaderLogoPostion.LEFT,
};

LogoLeft.args = leftArgs;
