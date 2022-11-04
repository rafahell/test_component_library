import React from 'react'
import { ComponentRadio } from './RadioButton'

export default {
    title: 'Components/Radio button',
    component: ComponentRadio,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentRadio } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentRadio {...args} />
export const Primary = Template.bind({})
Primary.args = {
    label: 'radio button',
    id: 'button_primary',
    disabled: false,
    checked: false,
}
