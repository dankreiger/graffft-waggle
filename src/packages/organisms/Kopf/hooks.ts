import { useCallback, useMemo, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { KopfHeaderLogoPostion } from './Kopf.enums';
import { KopfProps } from './Kopf.interfaces';

export const useMenuToggler = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen, setMobileMenuOpen]);
  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);
  return { handleToggleMobileMenu, handleCloseMobileMenu, mobileMenuOpen };
};

export const useKopfDefaults = (props: KopfProps) => {
  const extra = useMenuToggler();

  const shouldCloseMenu = useMediaQuery(
    `(min-width: ${props.desktopMinWidth}px)`
  );

  const returnProps = useMemo<KopfProps>(() => {
    let kopfProps: KopfProps = { ...props };
    if (!props.sideNavItems) {
      kopfProps = {
        ...kopfProps,
        sideNavItems: props.headerNavItems,
      };
    }

    if (!props.isSetToTheLeftSide) {
      kopfProps = {
        ...kopfProps,
        isSetToTheLeftSide:
          props.headerLogoPosition === KopfHeaderLogoPostion.LEFT
            ? false
            : true,
      };
    }

    // if there's no attempt to control the mobile menu, give it sensible defaults
    if (
      !props.handleToggleMobileMenu &&
      !props.mobileMenuOpen &&
      !props.handleCloseMobileMenu
    ) {
      kopfProps = { ...kopfProps, ...extra };
    }
    return kopfProps;
  }, [props, extra]);

  if (shouldCloseMenu) {
    extra.handleCloseMobileMenu();
  }

  return returnProps;
};
