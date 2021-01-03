---
filename: /packages/molecules/SocialBanner.tsx
---


# SocialBanner API

The API documentation of the SocialBanner `Graffft Waggle` component.

## Import

```js
import { SocialBanner } from '@graffft-waggle/social-banner';
```


## SocialBanner

## Required Props

```ts
interface ButtonLink {
  iconTitle: IconType;
  buttonColor: string;
  iconColor: string;
  href: string;
}
```

| Name | Type | Description |
|:-----|:-----|:------------|
| buttonLinks |`ButtonLink[]`| icon items to be displayed in the banner |


```ts
enum SocialBannerDirection {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}
```

## Optional Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| linkSize |`number`|`24`  | size (width and height) of the banner item |
| paddingSize |`number`|`'4'`  | padding inside banner item |
| itemMargin |`string`|`5px`  |   margin between banner items |
| direction |`SocialBannerDirection`|`horizontal`  |  direction of items |
| customScss |`string`|`''`  |  custom scss for wrapper element |


## Demos

- TODO improve the confusing interface on this component 