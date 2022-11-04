import React from 'react'
import { ComponentBadge, ComponentBadgeDot } from './Badges'

export default {
    title: 'Components/Badges',
    component: ComponentBadge,
    ComponentBadgeDot,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentBadge } from "test-component-library"_ \n\n Use Material Icons: https://mui.com/material-ui/material-icons',
            },
        },
    },
}

const Template = (args) => <ComponentBadge {...args} />
export const Number = Template.bind({})
Number.args = {
    badgeContent: 35,
    icon: 'notifications',
}
const Template2 = (args) => <ComponentBadgeDot {...args} />
export const Dot = Template2.bind({})
Dot.args = {
    icon: 'notifications',
}
Dot.parameters = {
    docs: {
        source: {
            code: 'import { ComponentBadgeDot } from "test-component-library" \n\n <ComponentBadgeDot icon="notifications"/>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
