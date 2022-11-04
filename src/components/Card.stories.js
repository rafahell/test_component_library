import React from 'react'
import {
    ComponentCardShadowSoft,
    ComponentCardShadowHard,
    ComponentCardShadowNone,
} from './Card'

export default {
    title: 'Components/Card',
    component: ComponentCardShadowSoft,
    ComponentCardShadowHard,
    ComponentCardShadowNone,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentCardShadowSoft } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentCardShadowSoft {...args} />
export const Soft_Shadow = Template.bind({})
Soft_Shadow.args = {
    children: 'Soft shadow card example',
}

const Template2 = (args) => <ComponentCardShadowHard {...args} />
export const Hard_Shadow = Template2.bind({})
Hard_Shadow.args = {
    children: 'Hard shadow card example',
}
Hard_Shadow.parameters = {
    docs: {
        source: {
            code: 'import { ComponentCardShadowHard } from "test-component-library" \n\n <ComponentCardShadowHard> \n Hard shadow card example \n </ComponentCardShadowHard>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template3 = (args) => <ComponentCardShadowNone {...args} />
export const None = Template3.bind({})
None.args = {
    children: 'No shadow',
}
None.parameters = {
    docs: {
        source: {
            code: 'import { ComponentCardShadowNone } from "test-component-library" \n\n <ComponentCardShadowNone> \n No shadow \n </ComponentCardShadowNone>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
