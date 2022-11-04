import React from 'react'
import { ComponentSwitch } from './Switch'

export default {
    title: 'Components/Switch',
    component: ComponentSwitch,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentSwitch } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentSwitch {...args} />
export const Primary = Template.bind({})
Primary.args = {
    label: 'switch toggle',
    id: 'switch_primary',
    disabled: false,
    checked: false,
}
