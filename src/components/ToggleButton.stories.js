import React from 'react'
import { ButtonToggle } from './ToggleButton'

export default {
    title: 'Components/Toggle Button',
    component: ButtonToggle,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ButtonToggle } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ButtonToggle {...args} />
export const Primary = Template.bind({})
Primary.args = {
    label: 'Toggle Button',
    id: 'toggle_button',
    disabled: false,
    size: 'medium',
}
