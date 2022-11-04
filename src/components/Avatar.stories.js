import React from 'react'
import { ComponentAvatar } from './Avatar'

export default {
    title: 'Components/Avatar',
    component: ComponentAvatar,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        bgcolor: { control: 'color' },
    },
}

const Template = (args) => <ComponentAvatar {...args} />
export const Primary = Template.bind({})
Primary.args = {
    alt: 'John Doe',
    src: 'https://mui.com/static/images/avatar/1.jpg',
    size: 'medium',
}
Primary.argTypes = {
    bgcolor: {
        control: false,
    },
}
Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentAvatar } from "test-component-library" \n\n <ComponentAvatar \n alt="John Doe" \n size="medium" \n src="https://mui.com/static/images/avatar/1.jpg" />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template2 = (args) => <ComponentAvatar {...args} />
export const Fallback = Template2.bind({})
Fallback.args = {
    alt: 'John Fallback',
    size: 'medium',
    bgcolor: '#CCCCCC',
}
Fallback.parameters = {
    docs: {
        source: {
            code: 'import { ComponentAvatar } from "test-component-library" \n\n <ComponentAvatar \n alt="John Doe" \n size="medium" \n bgcolor="#CCCCCC" />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
