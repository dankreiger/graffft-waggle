import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    brandTitle: 'Graffft Alt',
    brandUrl: 'https://github.com/dankreiger/graffft-alt',
    brandImage: 'https://www.svgrepo.com/show/147415/dog.svg',
  }),
});
