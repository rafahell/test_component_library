import React from 'react'

import { ButtonStandardView } from './ButtonStandardView'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Examples/ButtonStandardView',
    component: ButtonStandardView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonStandardView {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}
