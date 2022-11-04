module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        '@react-theming/storybook-addon',
        '@storybook/addon-a11y',
    ],
    features: {
        modernInlineRender: true,
        babelModeV7: true,
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
}
