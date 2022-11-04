//import { theme } from '../../.storybook/dsTheme'
import { ButtonPrimary } from '../components/Button'
import { ButtonSecondary } from '../components/Button'
import { ButtonTertiary } from '../components/Button'

import { IconLogin } from '../components/Icon'
import { IconChart } from '../components/Icon'

import { IconSearching } from '../components/Icon'

import Box from '@mui/material/Box'

/**
 * Primary UI component for user interaction
 */
export const ButtonStandardView = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                >
                    Button Primary
                </ButtonPrimary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                    disabled="true"
                >
                    Button Primary Disabled
                </ButtonPrimary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonSecondary
                    href="https://ds.com"
                    id="button_secondary"
                    label="Button Secondary"
                    target="_blank"
                >
                    Button Secondary
                </ButtonSecondary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonTertiary
                    href="https://ds.com"
                    id="button_tertiary"
                    label="Button Tertiary"
                    target="_blank"
                >
                    Button Tertiary
                </ButtonTertiary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1, width: 250 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                >
                    <IconLogin />
                    Login
                </ButtonPrimary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                >
                    <IconChart />
                </ButtonPrimary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                >
                    <IconSearching />
                    Search
                </ButtonPrimary>
            </Box>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                    sizeVariant="small"
                >
                    Small
                </ButtonPrimary>
            </Box>
            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                    sizeVariant="medium"
                >
                    Med
                </ButtonPrimary>
            </Box>
            <Box sx={{ flexGrow: 1, p: 1 }}>
                <ButtonPrimary
                    href="https://ds.com"
                    id="button_primary"
                    label="Button Primary"
                    target="_blank"
                    sizeVariant="large"
                >
                    Large
                </ButtonPrimary>
            </Box>
        </>
    )
}
