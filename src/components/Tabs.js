import * as React from 'react'
import * as PropTypes from 'prop-types'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: ds.color.primary_400,
            contrastText: '#fff',
            dark: ds.color.primary_400,
        },
    },
    typography: {
        fontFamily: 'Lato',
        //    caption: {
        fontWeight: 700,
        //        },
    },
})

const TabComponent = styled(Tab)((args) => ({
    //    height: size[args.size],
    //    backgroundColor: ds.color.secondary_400,
    //    margin: ds.button_css_props.margin,
    //    borderRadius: ds.button_css_props.radius,
    //    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    label: args.label,
}))

export const ComponentTabs = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={args.value}
                        // onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        <TabComponent value="one" label="Tab Active" />
                        <TabComponent value="two" label="Tab Resting" />
                        <TabComponent value="three" label="Disabled" disabled />
                    </Tabs>
                </Box>
            </ThemeProvider>
        </>
    )
}

ComponentTabs.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
}
