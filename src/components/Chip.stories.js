import React from 'react'
import { ChipPrimary, ChipAvatar } from './Chip'
import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Chip',
    component: ChipPrimary,
    ChipAvatar,

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        bgColor: { control: 'select', options: ds.color },
        textColor: { control: 'select', options: ds.color },
    },

    parameters: {
        docs: {
            description: {
                component:
                    '_import { ChipPrimary } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ChipPrimary {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Chip',
    label: 'Chip Primary',
    id: 'chip_primary',
    variant: 'filled',
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
    bgColor: ds.color.secondary_400,
    textColor: ds.color.shade_0,
}

const Template2 = (args) => <ChipAvatar {...args} />
export const Avatar = Template2.bind({})
Avatar.args = {
    children: 'Chip',
    label: 'John Doe',
    id: 'chip_primary',
    variant: 'filled',
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
    alt: 'John Doe',
    src: 'https://mui.com/static/images/avatar/1.jpg',
    bgColor: ds.color.secondary_400,
    textColor: ds.color.shade_0,
}
