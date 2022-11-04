import React from 'react'

import { ComponentTypographyWhite } from './TypographyWhite'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Typography White',
    component: ComponentTypographyWhite,
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentTypographyWhite } from "test-component-library"_',
            },
        },
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#01263E' }],
        },
    },
}

const Heading1 = (args) => <ComponentTypographyWhite variant="h1" {...args} />
export const H1 = Heading1.bind({})
H1.args = {
    children: 'H1 / Lato Bold',
    gutterBottom: false,
}

const Heading2 = (args) => <ComponentTypographyWhite variant="h2" {...args} />
export const H2 = Heading2.bind({})
H2.args = {
    children: 'H2 / Lato Bold',
    gutterBottom: false,
}
H2.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypographyWhite } from "test-component-library" \n\n <ComponentTypographyWhite variant="h2"> \n H2 / Lato Bold \n </ComponentTypographyWhite>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading3 = (args) => <ComponentTypographyWhite variant="h3" {...args} />
export const H3 = Heading3.bind({})
H3.args = {
    children: 'H3 / Lato Bold',
    gutterBottom: false,
}
H3.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypographyWhite } from "test-component-library" \n\n <ComponentTypographyWhite variant="h3"> \n H3 / Lato Bold \n </ComponentTypographyWhite>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading4 = (args) => <ComponentTypographyWhite variant="h4" {...args} />
export const H4 = Heading4.bind({})
H4.args = {
    children: 'H4 / Lato Bold',
    gutterBottom: false,
}
H4.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypographyWhite } from "test-component-library" \n\n <ComponentTypographyWhite variant="h4"> \n H4 / Lato Bold \n </ComponentTypographyWhite>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading5 = (args) => <ComponentTypographyWhite variant="h5" {...args} />
export const H5 = Heading5.bind({})
H5.args = {
    children: 'H5 / Lato Bold',
    gutterBottom: false,
}
H5.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypographyWhite } from "test-component-library" \n\n <ComponentTypographyWhite variant="h5"> \n H5 / Lato Bold \n </ComponentTypographyWhite>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
