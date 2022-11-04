import React from 'react'
import { ComponentSelect } from './Select'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Select',
    component: ComponentSelect,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
}

const Template = (args) => <ComponentSelect {...args} />
export const Primary = Template.bind({})
Primary.args = {
    size: 'medium',
    label: 'Select',
    ag: '5',
}
Primary.argTypes = {}
Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentSelect } from "test-component-library" \n\n <ComponentSelect size="medium"  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
