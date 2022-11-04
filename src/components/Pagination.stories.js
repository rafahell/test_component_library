import React from 'react'
import { ComponentPagination } from './Pagination'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Pagination',
    component: ComponentPagination,
}

const Template = (args) => <ComponentPagination {...args} />
export const Primary = Template.bind({})
Primary.args = {
    count: 10,
    defaultPage: 4,
}

Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentPagination } from "test-component-library" \n\n <ComponentPagination  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
