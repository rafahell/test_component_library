import React from 'react'

import { ComponentTypography } from './Typography'

export default {
    title: 'Components/Typography',
    component: ComponentTypography,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentTypography } from "test-component-library"_',
            },
        },
    },
}

const Heading1 = (args) => <ComponentTypography variant="h1" {...args} />
export const H1 = Heading1.bind({})
H1.args = {
    children: 'H1 / Lato Bold',
    gutterBottom: false,
}

const Heading2 = (args) => <ComponentTypography variant="h2" {...args} />
export const H2 = Heading2.bind({})
H2.args = {
    children: 'H2 / Lato Bold',
    gutterBottom: false,
}
H2.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypography } from "test-component-library" \n\n <ComponentTypography variant="h2"> \n H2 / Lato Bold \n </ComponentTypography>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading3 = (args) => <ComponentTypography variant="h3" {...args} />
export const H3 = Heading3.bind({})
H3.args = {
    children: 'H3 / Lato Bold',
    gutterBottom: false,
}
H3.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypography } from "test-component-library" \n\n <ComponentTypography variant="h3"> \n H3 / Lato Bold \n </ComponentTypography>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading4 = (args) => <ComponentTypography variant="h4" {...args} />
export const H4 = Heading4.bind({})
H4.args = {
    children: 'H4 / Lato Bold',
    gutterBottom: false,
}
H4.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypography } from "test-component-library" \n\n <ComponentTypography variant="h4"> \n H4 / Lato Bold \n </ComponentTypography>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Heading5 = (args) => <ComponentTypography variant="h5" {...args} />
export const H5 = Heading5.bind({})
H5.args = {
    children: 'H5 / Lato Bold',
    gutterBottom: false,
}
H5.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypography } from "test-component-library" \n\n <ComponentTypography variant="h5"> \n H5 / Lato Bold \n </ComponentTypography>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const B2 = (args) => <ComponentTypography variant="body2" {...args} />
export const Body2 = B2.bind({})
Body2.args = {
    children: 'Body2 / Lato Bold',
    gutterBottom: false,
}

Body2.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTypography } from "test-component-library" \n\n <ComponentTypography variant="body2"> \n Body2 / Lato Bold \n </ComponentTypography>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
