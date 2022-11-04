import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Slider } from '@mui/material'

import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: ds.color.primary_400,
        },
    },
})

const SliderComponent = styled(Slider)((args) => ({
    defaultValue: [args.valueOne, args.valueTwo],

    height: 6,

    '& .MuiSlider-thumb': {
        height: 14,
        width: 14,
        backgroundColor: '#fff',
        //
        '&:focus, &:hover, &.Mui-active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                //    boxShadow: iOSBoxShadow,
            },
        },
    },

    '& .MuiSlider-rail': {
        backgroundColor: ds.color.neutral_300,
    },
}))

export const ComponentSlider = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={theme}>
                <SliderComponent
                    color="primary"
                    defaultValue={args.valueOne}
                    valueLabelDisplay="auto"
                    sx={{}}
                />
            </ThemeProvider>
        </>
    )
}

ComponentSlider.propTypes = {
    valueOne: PropTypes.string,
}

export const ComponentSliderRange = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={theme}>
                <SliderComponent
                    color="primary"
                    defaultValue={[args.valueOne, args.valueTwo]}
                    valueLabelDisplay="auto"
                    sx={{}}
                />
            </ThemeProvider>
        </>
    )
}

ComponentSliderRange.propTypes = {
    valueOne: PropTypes.string,
    valueTwo: PropTypes.string,
}
