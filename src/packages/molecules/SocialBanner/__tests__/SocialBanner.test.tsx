import React from 'react';
import { SocialBanner } from '../SocialBanner';
import { render } from '@testing-library/react';
import { IconType } from '@graffft-waggle/icon';
import { SocialBannerProps } from '../types/SocialBanner.interfaces';
import { SocialBannerDirection } from '../types/SocialBanner.enums';

const props: SocialBannerProps = {
  buttonLinks: [
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
  ],
};

describe('SocialBanner', () => {
  test('renders banner with items', () => {
    const { getByTestId } = render(<SocialBanner {...props} />);

    props.buttonLinks.forEach(({ iconTitle }) => {
      expect(
        getByTestId(`social-banner-item-${iconTitle}`)
      ).toBeInTheDocument();
    });
  });

  test('renders vertical banner with  items', () => {
    const newProps = {
      ...props,
      direction: SocialBannerDirection.VERTICAL,
    };
    const { getByTestId } = render(<SocialBanner {...newProps} />);
    const wrapper = getByTestId('social-banner-wrapper');
    const style = window.getComputedStyle(wrapper);
    expect(style.flexDirection).toBe('column');

    props.buttonLinks.forEach(({ iconTitle }) => {
      expect(
        getByTestId(`social-banner-item-${iconTitle}`)
      ).toBeInTheDocument();
    });
  });
});
