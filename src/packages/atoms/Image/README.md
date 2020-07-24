---
filename: /packages/molecules/Image/Image.tsx
---


# Image API

The API documentation of the Image `Graffft Waggle` component.

## Import

```js
import { Image } from '@graffft-waggle/circle-badge';
```


## Icon

## Required Props

| Name | Type | Description |
|:-----|:-----|:------------|
| aspectRatio | `{width: number; height: number;}` | object with width and height as numbers (px) |
| imgSrc | `string` | image source|
| imgAlt | `string` | image alt |


## Optional Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| size | `string` | `86px`  | width/height of circle badge |
| bgColor | `string` | `'#fff'`  | background color of circle badge. |
| handleClick | `() => void` | `() => {}`  |  onClick callback. |
| customScss | `string` | `''`  |  custom scss for wrapper element |


## Demos

- TODO