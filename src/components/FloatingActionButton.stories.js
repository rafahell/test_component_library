import React from 'react'
import { ComponentFab, ComponentFabIcon } from './FloatingActionButton'
import { IconSearching } from '../components/Icon'
//import { ds } from '../../.storybook/dsTheme'

export default {
    title: 'Components/Floating Action Button',
    component: ComponentFab,
    ComponentFabIcon,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
}

const Template = (args) => <ComponentFab {...args} />
export const Primary = Template.bind({})
Primary.args = {
    size: 'medium',
    label: 'FAB',
}
Primary.argTypes = {}
Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentFab } from "test-component-library" \n\n <ComponentFab size="medium"  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template2 = (args) => <ComponentFabIcon {...args} />
export const Icon = Template2.bind({})
Icon.args = {
    startIcon: <IconSearching />,
    size: 'medium',
}
Primary.argTypes = {}
Primary.parameters = {
    docs: {
        source: {
            code: 'import { ComponentFab } from "test-component-library" \n\n <ComponentFab size="medium"  />',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
