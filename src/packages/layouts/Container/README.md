---
filename: /packages/layouts/Container/Container.tsx
---

# Container API

The API documentation of the Container `Graffft Waggle` component.

## Import

```js
import { Container } from '@graffft-waggle/container';
```


## Container



```ts

// see @graffft-waggle/media-query
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = {
  [key in Breakpoint]: number;
};

```

```ts

// see @graffft-waggle/container
type ContainerMaxWidths = {
  [key in Breakpoint]: number; // in px
};

```

## Optional Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `breakpoints` | `Breakpoints` | `defaultBreakpoints`  | object of breakpoints, see `@graffft-waggle/media-query` for `defaultBreakpoints` value |
| `containerMaxWidths` | `ContainerMaxWidths` | `defaultContainerMaxWidths`  | object of container max-widths, see `@graffft-waggle/container` for `defaultContainerMaxWidths` value |
| `customScss` | `string` | `''`  | custom scss |


## Demos

- TODO