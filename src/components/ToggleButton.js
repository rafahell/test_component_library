import * as React from 'react'
import * as PropTypes from 'prop-types'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const ToggleButtons = styled(ToggleButton)(() => ({
    '&.MuiToggleButton-root': {
        color: ds.color.neutral_500,
        borderRadius: ds.button_css_props.radius,
        boxShadow: ds.button_css_props.none,
        textTransform: ds.button_css_props.none,
    },

    '&.Mui-selected': {
        color: ds.color.secondary_400,
        backgroundColor: ds.color.secondary_200,
        border: '1px solid ' + ds.color.secondary_400,
        '&:hover': {
            backgroundColor: ds.color.secondary_200,
            color: ds.color.secondary_400,
        },
        '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: '1px solid ' + ds.color.secondary_400,
        },
    },
    '&:hover': {
        backgroundColor: ds.color.secondary_200,
        color: ds.color.secondary_400,
        '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
            borderLeft: '1px solid ' + ds.color.secondary_400,
        },
    },
    '&.Mui-disabled': {
        opacity: 0.3,
    },
}))

export const ButtonToggle = ({ ...args }) => {
    const [onOff, setOnOff] = React.useState('on')

    const handleChange = (event, toggleOnOff) => {
        setOnOff(toggleOnOff)
    }
    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={onOff}
                exclusive
                onChange={handleChange}
                theme={theme}
                {...args}
            >
                <ToggleButtons value="on">Toggle On</ToggleButtons>
                <ToggleButtons value="off">Toggle Off</ToggleButtons>
            </ToggleButtonGroup>
        </>
    )
}

ButtonToggle.propTypes = {
    onClick: PropTypes.func,
}
