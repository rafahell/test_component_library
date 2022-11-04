import React from 'react'
import { AlertError, AlertWarning, AlertInfo, AlertSuccess } from './Alert'

export default {
    title: 'Components/Alerts',
    component: AlertError,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { AlertError } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <AlertError {...args} />
export const Error = Template.bind({})
Error.args = {
    title: 'Error',
    content: 'This is an error alert',
}

const Template2 = (args) => <AlertWarning {...args} />
export const Warning = Template2.bind({})
Warning.args = {
    title: 'Warning',
    content: 'This is a warning alert',
}
Warning.parameters = {
    docs: {
        source: {
            code: 'import { AlertWarning } from "test-component-library" \n\n <AlertWarning \n title="Warning" \n content="This is a warning alert" />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
const Template3 = (args) => <AlertInfo {...args} />
export const Info = Template3.bind({})
Info.args = {
    title: 'Info',
    content: 'This is an info alert',
}
Info.parameters = {
    docs: {
        source: {
            code: 'import { AlertInfo } from "test-component-library" \n\n <AlertInfo \n title="Info" \n content="This is an info alert" />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
const Template4 = (args) => <AlertSuccess {...args} />
export const Success = Template4.bind({})
Success.args = {
    title: 'Success',
    content: 'This is a success alert',
}
Success.parameters = {
    docs: {
        source: {
            code: 'import { AlertSuccess } from "test-component-library" \n\n <AlertSuccess \n title="Info" \n content="This is a success alert" />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
