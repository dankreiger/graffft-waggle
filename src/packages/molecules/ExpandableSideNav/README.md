---
filename: /packages/molecules/ExpandableSideNav/ExpandableSideNav.tsx
---

# ExpandableSideNav API

The API documentation of the ExpandableSideNav `Graffft Waggle` component.

## Import

```js
import { ExpandableSideNav } from '@graffft-waggle/expandable-side-nav';
```

## ExpandableSideNav

```ts
interface NavItem {
  key: string;
  navItem: string | number | JSX.Element;
  navItemColor?: string;
  navItemHoverColor?: string;
  navItemBgHoverColor?: string;
}
```

## Optional Props

| Name                              | Type                          | Default              | Description                                          |
| :-------------------------------- | :---------------------------- | :------------------- | :--------------------------------------------------- |
| `sideNavLogo`                     | `string\|number\|JSX.Element` | `undefined`          | a logo for the side nav header                       |
| `sideNavItems`                    | `NavItem[]`                   | `[]`                 | items in side nav                                    |
| `isExpanded`                      | `boolean`                     | `false`              | Expanded state for sidenav                           |
| `expandableSideNavZIndex`         | `number`                      | `300`                | z-index for expandable side nav                      |
| `expandableSideNavBgOverlayColor` | `string`                      | `rgba(0, 0, 0, 0.4)` | expanded state background overlay color              |
| `handleCloseSideNav`              | `() => void`                  | `() => {}`           | callback function to close side nav                  |
| `isSetToTheLeftSide`              | `boolean`                     | `false`              | true if nav should expand from left side of viewport |
| `sideNavHeaderHeight`             | `string`                      | `77px`               | height of side nav header item                       |
| `sideNavItemHeight`               | `string`                      | `54px`               | height of each side nav item                         |
| `sideNavItemPadding`              | `string`                      | `24px`               | padding separating text from side nav border         |
| `sideNavBurgerColor`              | `string`                      | `#000`               | burger color in side nav                             |

## Demos

- TODO
