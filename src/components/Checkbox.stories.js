import React from 'react'
import { ComponentCheckbox } from './Checkbox'

export default {
    title: 'Components/Checkbox',
    component: ComponentCheckbox,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentCheckbox } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentCheckbox {...args} />
export const Primary = Template.bind({})
Primary.args = {
    id: 'checkbox',
    label: 'Checkbox',
    checked: true,
    disabled: false,
}
