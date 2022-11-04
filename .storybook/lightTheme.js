import { create } from '@storybook/theming'
import logo from '../assets/rafa-logo.png'
import '@fontsource/lato'

export default create({
    base: 'light',
    fontFamily: 'Lato',
    fontWeight: 700,
    fontStyle: 'normal',
    // Base color
    colorSecondary: '#113739',

    // UI
    appBg: '#f0f0f0',
    appContentBg: '#FFFFFF',
    appBorderColor: 'rgba(0,0,0,.1)',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#333333',
    textInverseColor: '#FFFFFF',
    textMutedColor: '#666666',

    // Toolbar default and active colors
    barTextColor: '#878686',
    barSelectedColor: '#113739',
    barBg: '#FFFFFF',

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: '#333333',
    inputBorderRadius: 4,

    // Brand assets
    brandTitle: 'Rafa Component Library',
    brandUrl: 'https://rafahell.com',
    brandImage: logo,
    brandTarget: '_self',
})
