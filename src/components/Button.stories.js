import React from 'react'
import { PersonAddAltSharp } from '@mui/icons-material'
import {
    ButtonPrimary,
    ButtonSecondary,
    ButtonError,
    ButtonWarning,
    ButtonIcon,
    ButtonsGroup,
    ButtonsGroupOutline,
} from './Button'

export default {
    title: 'Components/Button',
    component: ButtonPrimary,
    ButtonSecondary,
    ButtonError,
    ButtonWarning,
    ButtonIcon,
    ButtonsGroup,
    ButtonsGroupOutline,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ButtonPrimary } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ButtonPrimary {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
    label: 'Button',
    id: 'button_primary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
}
// Primary.parameters = {
//     docs: {
//         source: {
//             code: 'import { ButtonPrimary } from "test-component-library" \n\n <ButtonPrimary \n href="https://ds.com" \n id="button_primary" \n label="Button" \n size="medium" \n target="_blank"> \n Button \n </ButtonPrimary>',
//             language: 'js',
//             type: 'auto',
//             format: true,
//         },
//     },
// }

const Template2 = (args) => <ButtonSecondary {...args} />
export const Secondary = Template2.bind({})
Secondary.args = {
    children: 'Button',
    label: 'Button',
    id: 'button_secondary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
}

Secondary.parameters = {
    docs: {
        source: {
            code: 'import { ButtonSecondary } from "test-component-library" \n\n <ButtonSecondary \n href="https://ds.com" \n id="button_secondary" \n label="Button" \n size="medium" \n target="_blank"> \n Button \n </ButtonSecondary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template3 = (args) => <ButtonError {...args} />
export const Error = Template3.bind({})
Error.args = {
    children: 'Button',
    label: 'Button',
    id: 'button_tertiary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
}
Error.parameters = {
    docs: {
        source: {
            code: 'import { ButtonError } from "test-component-library" \n\n <ButtonError \n href="https://ds.com" \n id="button_Error" \n label="Button" \n size="medium" \n target="_blank"> \n Button \n </ButtonError>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template4 = (args) => <ButtonWarning {...args} />
export const Warning = Template4.bind({})
Warning.args = {
    children: 'Button',
    label: 'Button',
    id: 'button_quaternary',
    fullWidth: false,
    disabled: false,
    href: 'https://ds.com',
    target: '_blank',
    size: 'medium',
}
Warning.parameters = {
    docs: {
        source: {
            code: 'import { ButtonWarning } from "test-component-library" \n\n <ButtonWarning \n href="https://ds.com" \n id="button_primary" \n label="Button" \n size="medium" \n target="_blank"> \n Button \n </ButtonWarning>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template5 = (args) => <ButtonIcon {...args} />
export const ButtonsWithIcon = Template5.bind({})
ButtonsWithIcon.args = {
    children: 'Button',
    label: 'Button',
    id: 'button_icon',
    fullWidth: false,
    disabled: false,
    size: 'medium',
    startIcon: <PersonAddAltSharp />,
}
ButtonsWithIcon.parameters = {
    docs: {
        description: {
            story: 'Use Material Icons: https://mui.com/material-ui/material-icons/',
        },
        source: {
            code: 'import { ButtonPrimary } from "test-component-library" \nimport { PersonAddAltSharp } from "@mui/icons-material" \n\n <ButtonPrimary \n id="button_icon" \n label="Button" \n size="medium" \n startIcon={<PersonAddAltSharp />}> \n Button \n </ButtonPrimary>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template6 = (args) => <ButtonsGroup {...args} />
export const ButtonGroup = Template6.bind({})
ButtonGroup.args = {
    label: 'Button Group',
    id: 'button_group',
    disabled: false,
}

ButtonGroup.argTypes = {
    size: {
        control: false,
    },
}
ButtonGroup.parameters = {
    docs: {
        source: {
            code: 'import { ButtonsGroup } from "test-component-library" \n\n <ButtonsGroup \n id="button_group" \n label="Button Group"> \n <Button>One</Button> \n <Button>Two</Button> \n <Button>Three</Button> \n </ButtonsGroup>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}

const Template7 = (args) => <ButtonsGroupOutline {...args} />
export const ButtonGroupOutline = Template7.bind({})
ButtonGroupOutline.args = {
    label: 'Button Group Outlined',
    id: 'button_group_outlined',
    disabled: false,
}
ButtonGroupOutline.parameters = {
    docs: {
        source: {
            code: 'import { ButtonsGroupOutline } from "test-component-library" \n\n <ButtonsGroupOutline \n id="button_group_outlined" \n label="Button Group Outlined"> \n <Button>One</Button> \n <Button>Two</Button> \n <Button>Three</Button> \n </ButtonsGroupOutline>',
            language: 'js',
            type: 'auto',
            format: true,
        },
    },
}
ButtonGroupOutline.argTypes = {
    size: {
        control: false,
    },
}
