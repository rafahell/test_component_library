import * as React from 'react'
import * as PropTypes from 'prop-types'
import { LinearProgress } from '@mui/material'

import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: ds.color.secondary_400,
        },
    },
})

const size = {
    small: ds.linearprogress_css_props.size_variant.height_small,
    medium: ds.linearprogress_css_props.size_variant.height_medium,
}

const radius = {
    small: ds.linearprogress_css_props.size_variant.radius_small,
    medium: ds.linearprogress_css_props.size_variant.radius_medium,
}

const LinearProgressComponent = styled(LinearProgress)((args) => ({
    value: args.value,
}))

export const ComponentLinearProgress = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={theme}>
                <LinearProgressComponent
                    color="primary"
                    variant="determinate"
                    value={args.value}
                    sx={{
                        height: size[args.size],
                        borderRadius: radius[args.size],
                        bgcolor: ds.color.neutral_300,
                    }}
                />
            </ThemeProvider>
        </>
    )
}

ComponentLinearProgress.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
}

export const ComponentIndeterminateLinearProgress = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            {' '}
            <ThemeProvider theme={theme}>
                <LinearProgressComponent
                    value={args.value}
                    sx={{
                        height: size[args.size],
                        borderRadius: radius[args.size],
                    }}
                />
            </ThemeProvider>
        </>
    )
}

ComponentIndeterminateLinearProgress.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
}
