import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './App.routes';
import {
  LinkSt,
  AppMainSt,
  headerHeight,
  ScrollToTopButton,
} from './App.styles';
import { Kopf } from '@graffft-waggle/Kopf';
import { headerNavItems, sideNavItems, useScrollToTop } from './constants';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [setMobileMenuOpen, mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);

  const showScroll = useScrollToTop();

  return (
    <Router>
      <Kopf
        mobileMenuOpen={mobileMenuOpen}
        headerLogo={<LinkSt to="/">Woof</LinkSt>}
        sideNavLogo={<LinkSt to="/">Woof</LinkSt>}
        handleToggleMobileMenu={toggleMobileMenu}
        handleCloseMobileMenu={closeMobileMenu}
        headerNavItems={headerNavItems}
        sideNavItems={sideNavItems}
        headerHeight={headerHeight}
      />
      <AppMainSt>
        <AppRoutes />
      </AppMainSt>
      <ScrollToTopButton
        showScroll={showScroll}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        &#8593;
      </ScrollToTopButton>
    </Router>
  );
}

export default App;
