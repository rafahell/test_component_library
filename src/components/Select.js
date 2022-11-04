import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Select } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import { styled } from '@mui/material/styles'

import { ds } from '../../.storybook/dsTheme'
import { ThemeProvider } from '@mui/material/styles'

/*
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

*/

const SelectComponent = styled(Select)((args) => ({
    value: args.size,
}))

const MenuItemComponent = styled(MenuItem)((args) => ({
    value: args.size,
}))

export const ComponentSelect = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={ds}>
                <SelectComponent
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={args.value}
                    label="Select"
                    // onChange={handleChange}
                >
                    <MenuItemComponent value={10}>Ten</MenuItemComponent>
                    <MenuItemComponent value={20}>Twenty</MenuItemComponent>
                    <MenuItemComponent value={30}>Thirty</MenuItemComponent>
                </SelectComponent>
            </ThemeProvider>
        </>
    )
}

ComponentSelect.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
}
