---
filename: /packages/organisms/Kopf.tsx
---

# Kopf API

The API documentation of the Kopf `Graffft Waggle` component.

## Import

```js
import { Kopf } from '@graffft-waggle/kopf';
```

## Kopf

## Required Props

```ts
interface KopfHeaderNavItem {
  key: string;
  navItem: string | number | JSX.Element;
  navItemColor: string;
  navItemBgHoverColor: string;
}
```

| Name           | Type                        | Description         |
| :------------- | :-------------------------- | :------------------ |
| headerLogo     | `string|number|JSX.Element` | Main header logo    |
| headerNavItems | `KopfHeaderNavItem[]`       | Nav items in header |

```ts
export enum KopfHeaderLogoPostion {
  LEFT = 'left',
  RIGHT = 'right',
}
```

## Optional Props

| Name                           | Type                        | Default                                                               | Description                         |
| :----------------------------- | :-------------------------- | :-------------------------------------------------------------------- | :---------------------------------- |
| isFixed                        | `boolean`                   | `true`                                                                | if true, header is fixed to the top |
| headerMaxWidth                 | `string`                    | `1800px`                                                              | max width for header                |
| sideNavDisabled                | `boolean`                   | `false`                                                               | Logo needed to enable sidenav       |
| sideNavLogo                    | `string|number|JSX.Element` | `undefined`                                                           | Logo needed to enable sidenav       |
| desktopMinWidth                | `number`                    | `768`                                                                 | Min-width for non-mobile devices    |
| headerBackgroundColor          | `string`                    | `#fff`                                                                | Header background color             |
| headerBoxShadow                | `string`                    | `'0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)'` | Header box shadow                   |
| headerBurgerColor              | `string`                    | `#000`                                                                | Header burger color                 |
| headerHeight                   | `string`                    | `60px`                                                                | Header height                       |
| headerLogoPosition             | `KopfHeaderLogoPostion`     | `left`                                                                | Header logo position                |
| headerNavItemHorizontalPadding | `string`                    | `0px 16px`                                                            | Padding around each nav item        |
| headerMobilePadding            | `string`                    | `0px 16px`                                                            | Header mobile padding               |
| headerPadding                  | `string`                    | `0px 24px`                                                            | Header padding                      |
| headerZIndex                   | `number`                    | `200`                                                                 | Header z-index                      |
| mobileMenuOpen                 | `boolean`                   | `false`                                                               | mobile menu open state              |
| handleToggleMobileMenu         | `() => void`                | `() => {}`                                                            | callback for toggling mobile menu   |
| handleCloseMobileMenu          | `() => void`                | `() => {}`                                                            | callback for closing mobile menu    |
| customScss                     | `string`                    | `''`                                                                  | custom scss for wrapper element     |

## Demos

- TODO
