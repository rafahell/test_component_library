import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import '@fontsource/lato'
import { ds } from './dsTheme'

export const decorators = [
    (Story) => (
        <MUIThemeProvider theme={ds}>
            <ThemeProvider theme={ds}>{Story()}</ThemeProvider>
        </MUIThemeProvider>
    ),
]
