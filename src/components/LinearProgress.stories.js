import React from 'react'
import {
    ComponentLinearProgress,
    ComponentIndeterminateLinearProgress,
} from './LinearProgress'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Linear Progress',
    component: ComponentLinearProgress,
    ComponentIndeterminateLinearProgress,
}

const Template = (args) => <ComponentLinearProgress {...args} />
export const Primary = Template.bind({})
Primary.args = {
    value: 30,
    size: 'medium',
}
;(Primary.argTypes = {
    size: {
        options: ['small', 'medium'],
        control: { type: 'radio' },
    },
}),
    (Primary.parameters = {
        docs: {
            source: {
                code: 'import { ComponentLinearProgress } from "test-component-library" \n\n <ComponentLinearProgress value={progressValue}  />',
                language: 'js',
                type: 'auto',
                format: true,
            },
        },
    })

const Template2 = (args) => <ComponentIndeterminateLinearProgress {...args} />
export const Indeterminate = Template2.bind({})
Indeterminate.args = {
    value: 30,
}

Indeterminate.argTypes = {
    size: {
        options: ['small', 'medium'],
        control: { type: 'radio' },
    },
}
Indeterminate.parameters = {
    docs: {
        source: {
            code: 'import { ComponentIndeterminateLinearProgress } from "test-component-library" \n\n <Component IndeterminateLinearProgress  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
