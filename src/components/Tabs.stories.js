import React from 'react'
import { ComponentTabs } from './Tabs'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Tabs',
    component: ComponentTabs,
}

const Template = (args) => <ComponentTabs {...args} />
export const Primary = Template.bind({})
Primary.args = {
    value: 'two',
}

Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentTabs } from "test-component-library" \n\n <ComponentTabs  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
