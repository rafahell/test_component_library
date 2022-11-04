import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Fab } from '@mui/material'

import { styled } from '@mui/material/styles'

import { ds } from '../../.storybook/dsTheme'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: ds.color.secondary_400,
        },
        secondary: {
            main: ds.color.primary_400,
        },
    },
})

const FabComponent = styled(Fab)((args) => ({
    size: args.size,
}))

export const ComponentFab = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            {' '}
            <ThemeProvider theme={theme}>
                <FabComponent color="primary" size={args.size}>
                    {' '}
                    {args.label}
                </FabComponent>{' '}
            </ThemeProvider>
        </>
    )
}

ComponentFab.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
}

export const ComponentFabIcon = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            {' '}
            <ThemeProvider theme={theme}>
                <FabComponent color="primary" size={args.size}>
                    {args.startIcon}{' '}
                </FabComponent>{' '}
            </ThemeProvider>
        </>
    )
}

ComponentFabIcon.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    startIcon: PropTypes.element,
}

// function stringToColor(string) {
//     let hash = 0
//     let i
//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//         hash = string.charCodeAt(i) + ((hash << 5) - hash)
//     }

//     let color = '#'

//     for (i = 0; i < 3; i += 1) {
//         const value = (hash >> (i * 8)) & 0xff
//         color += `00${value.toString(16)}`.slice(-2)
//     }
//     /* eslint-enable no-bitwise */
//     return color
// }
