module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/packages/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions',
  ],
};
