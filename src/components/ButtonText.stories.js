import React from 'react'
import {
    ButtonTextPrimary,
    ButtonTextSecondary,
    ButtonTextTertiary,
} from './ButtonText'

export default {
    title: 'Components/Text Button',
    component: ButtonTextPrimary,
    ButtonTextSecondary,
    ButtonTextTertiary,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ButtonTextPrimary } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ButtonTextPrimary {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Text Button',
    label: 'Button',
    id: 'button_primary',
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}

const Template2 = (args) => <ButtonTextSecondary {...args} />

export const Secondary = Template2.bind({})
Secondary.args = {
    children: 'Text Button',
    label: 'Button',
    id: 'button_secondary',
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}
Secondary.parameters = {
    docs: {
        source: {
            code: 'import { ButtonTextSecondary } from "test-component-library" \n\n <ButtonTextSecondary \n href="https://ds.com" \n id="button_secondary" \n label="Button" \n size="medium"> \n Text Button \n </ButtonTextSecondary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template3 = (args) => <ButtonTextTertiary {...args} />
export const Tertiary = Template3.bind({})
Tertiary.args = {
    children: 'Text Button',
    label: 'Button',
    id: 'button_tertiary',
    disabled: false,
    href: 'https://ds.com',
    size: 'medium',
}
Tertiary.parameters = {
    docs: {
        source: {
            code: 'import { ButtonTextTertiary } from "test-component-library" \n\n <ButtonTextTertiary \n href="https://ds.com" \n id="button_tertiary" \n label="Button" \n size="medium"> \n Text Button \n </ButtonTextTertiary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
