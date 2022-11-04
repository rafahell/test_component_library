import React from 'react'

import Box from '@mui/material/Box'

import { ComponentCardShadowSoft } from '../components/Card'
import { ButtonPrimary } from '../components/Button'
import { ButtonSecondary } from '../components/Button'
import { IconLogin } from '../components/Icon'

import { ComponentTextField } from '../components/TextField'
import { ComponentTextFieldPassword } from '../components/TextField'

import { ComponentCheckbox } from '../components/Checkbox'

import { ComponentTypography } from '../components/Typography'

/**
 * Primary UI component for user interaction
 */
export const FormView = (args) => {
    return (
        <>
            <ComponentCardShadowSoft shadowVariant="hard" cardWidth="400px">
                <Box margin="50px">
                    <ComponentTextField
                        helperText="Please enter your first name"
                        id="firstname"
                        label="First Name"
                        value="John"
                        fullWidth
                    />
                    <br />
                    <br />
                    <ComponentTextField
                        helperText="Please enter your surname"
                        id="surname"
                        label="Surname"
                        value="Doe"
                        fullWidth
                    />
                    <br />
                    <br />
                    <ComponentTextField
                        helperText="Please enter your email address"
                        id="email"
                        label="e-mail"
                        value="example@example.com"
                        fullWidth
                    />
                    <br />
                    <br />
                    <ComponentTextFieldPassword
                        fullWidth
                        label="Password"
                        {...args}
                    />
                    <br />
                    <br />

                    <ComponentTypography variant="body2" {...args}>
                        <ComponentCheckbox
                            ariaLabel="Example Checkbox"
                            id="checkbox"
                            label="I accept the terms and conditions"
                        />
                        I accept the terms and conditions
                    </ComponentTypography>
                    <br />
                    <br />

                    <ButtonPrimary
                        href="https://ds.com"
                        id="button_primary"
                        label="Button Primary"
                        target="_blank"
                        fullWidth
                    >
                        <IconLogin />
                        Login
                    </ButtonPrimary>

                    <ButtonPrimary
                        href="https://ds.com"
                        id="button_primary"
                        label="Button Primary"
                        target="_blank"
                        disabled="true"
                        fullWidth
                    >
                        Cancel
                    </ButtonPrimary>
                    <br />

                    <ButtonSecondary
                        href="https://ds.com"
                        id="button_secondary"
                        label="Button Secondary"
                        target="_blank"
                        fullWidth
                    >
                        Help
                    </ButtonSecondary>
                </Box>
            </ComponentCardShadowSoft>
        </>
    )
}
