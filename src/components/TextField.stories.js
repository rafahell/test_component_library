import React from 'react'
import {
    ComponentTextField,
    ComponentTextFieldPassword,
    ComponentTextFieldDisabled,
} from './TextField'
export default {
    title: 'Components/TextField',
    component: ComponentTextField,
    ComponentTextFieldPassword,
    ComponentTextFieldDisabled,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentTextField } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentTextField {...args} />
export const Textfield = Template.bind({})

Textfield.args = {
    value: 'Example Textfield',
    label: 'Standard',
    id: 'standard_textfield',
    helperText: 'Some important text',
}

const Template2 = (args) => <ComponentTextFieldPassword {...args} />
export const Password = Template2.bind({})
Password.args = {
    value: 'password',
    label: 'Password',
    id: 'standard_password',
    // helperText: 'Password field is empty',
}
Password.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTextFieldPassword } from "test-component-library" \n\n <ComponentTextFieldPassword \n id="standard_password" \n label="Password" \n value="password"\n/>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template3 = (args) => <ComponentTextFieldDisabled {...args} />
export const Disabled = Template3.bind({})
Disabled.args = {
    value: 'Field disabled',
    label: 'Disabled',
    id: 'standard_disabled',
    disabled: true,
}
Disabled.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTextFieldDisabled } from "test-component-library" \n\n <ComponentTextFieldDisabled \n disabled \n id="standard_disabled" \n label="Disabled" \n value="Field disabled"\n/>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
