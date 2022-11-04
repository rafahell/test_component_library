import React from 'react'
import {
    ButtonOutlinePrimary,
    ButtonOutlineSecondary,
    ButtonOutlineTertiary,
} from './ButtonOutline'

export default {
    title: 'Components/Outline Button',
    component: ButtonOutlinePrimary,
    ButtonOutlineSecondary,
    ButtonOutlineTertiary,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ButtonOutlinePrimary } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ButtonOutlinePrimary {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
    label: 'Button Outline',
    id: 'button_outline_primary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}

const Template2 = (args) => <ButtonOutlineSecondary {...args} />

export const Secondary = Template2.bind({})
Secondary.args = {
    children: 'Button',
    label: 'Button Outline',
    id: 'button_outline_secondary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}
Secondary.parameters = {
    docs: {
        source: {
            code: 'import { ButtonOutlineSecondary } from "test-component-library" \n\n <ButtonOutlineSecondary \n href="https://ds.com" \n id="button_outline_secondary" \n label="Button Outline" \n size="medium"> \n Button \n </ButtonOutlineSecondary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template3 = (args) => <ButtonOutlineTertiary {...args} />
export const Tertiary = Template3.bind({})
Tertiary.args = {
    children: 'Button',
    label: 'Button Outline',
    id: 'button_outline_tertiary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}
Tertiary.parameters = {
    docs: {
        source: {
            code: 'import { ButtonOutlineTertiary } from "test-component-library" \n\n <ButtonOutlineTertiary \n href="https://ds.com" \n id="button_outline_tertiary" \n label="Button Outline" \n size="medium"> \n Button \n </ButtonOutlineTertiary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
