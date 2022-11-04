import React from 'react'
import { IconLogin, IconChart, IconSearching } from './Icon'
// import { theme } from '../../.storybook/dsTheme'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Icon',
    component: IconLogin,
    IconChart,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { options: theme.palette },
        // Color: { control: 'select', options: theme.palette },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconLogin {...args} />

export const Login = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Login.args = {
    // backgroundColor: { options: theme.palette.fill },
    // Color: { control: 'select', options: theme.palette },
    id: 'icon_login',
}

const Template2 = (args) => <IconChart {...args} />

export const Chart = Template2.bind({})
Chart.args = {
    id: 'icon_chart',
}

const Template3 = (args) => <IconSearching {...args} />

export const Search = Template3.bind({})
Search.args = {
    id: 'icon_search',
}
