import { Container } from '@graffft-waggle/container';
import { Colors } from '@graffft-waggle/themes-portfolio';
import * as React from 'react';
import {
  useFullHeightRootElement,
  useNoStoryBookStyle,
} from '../../../helpers/story-hooks';
import { SimpleFooter } from './SimpleFooter';
import { SimpleFooterProps } from './types/SimpleFooter.interfaces';

export default {
  title: 'Molecules/SimpleFooter',
  component: SimpleFooter,
};

export const Example = (args: SimpleFooterProps) => {
  useNoStoryBookStyle();
  useFullHeightRootElement();
  return (
    <div
      style={{ display: 'grid', gridTemplateRows: '1fr auto', height: '100%' }}
    >
      <Container>
        <h1>headline</h1>
        <h3>description</h3>
      </Container>
      <SimpleFooter {...args} />
    </div>
  );
};

const footerItems = [
  {
    key: '/imprint',
    navItem: (
      <a style={{ textDecoration: 'none' }} href="/imprint">
        Imprint
      </a>
    ),
    navItemColor: '#fff',
    // navItemHoverColor: '#006EDD',
    // navItemBgHoverColor: 'rgba(32,33,36,0.04)',
  },
  {
    key: '/dsgvo',
    navItem: (
      <a style={{ textDecoration: 'none' }} href="/dsgvo">
        DSGVO
      </a>
    ),
    navItemColor: '#fff',
    // navItemHoverColor: '#006EDD',
    // navItemBgHoverColor: 'rgba(32,33,36,0.04)',
  },
];

const footerArgs: SimpleFooterProps = {
  footerBgColor: Colors.Primary,
  footerCopyrightText: `Dan Kreiger ${new Date().getFullYear()}`,
  footerCopyrightTextColor: '#fff',
  footerItems,
  customScss: '',
};
Example.args = footerArgs;
