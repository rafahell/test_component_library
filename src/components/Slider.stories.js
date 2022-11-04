import React from 'react'
import { ComponentSlider, ComponentSliderRange } from './Slider'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Slider',
    component: ComponentSlider,
    ComponentSliderRange,
}

const Template = (args) => <ComponentSlider {...args} />
export const Primary = Template.bind({})
Primary.args = {
    valueOne: 15,
}

Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentSlider } from "test-component-library" \n\n <ComponentSlider value={valueOne}  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template2 = (args) => <ComponentSliderRange {...args} />
export const Range = Template2.bind({})
Range.args = {
    valueOne: 15,
    valueTwo: 65,
}

Range.parameters = {
    docs: {
        source: {
            code: 'import { ComponentSliderRange } from "test-component-library" \n\n <ComponentSliderRange valueOne={valueOne} valueTwo={valueTwo}  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
