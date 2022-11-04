import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const PrimaryTextButton = styled(Button)(() => ({
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.secondary_400,
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: ds.color.secondary_200,
    },
    '&.Mui-disabled': {
        color: ds.color.secondary_400,
        opacity: 0.3,
    },
}))

const SecondaryTextButton = styled(Button)(() => ({
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.primary_400,
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: ds.color.primary_100,
    },
    '&.Mui-disabled': {
        color: ds.color.primary_400,
        opacity: 0.3,
    },
}))

const TertiaryTextButton = styled(Button)(() => ({
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.error_400,
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: ds.color.error_100,
    },
    '&.Mui-disabled': {
        color: ds.color.error_400,
        opacity: 0.3,
    },
}))

export const ButtonTextPrimary = ({ ...args }) => {
    return (
        <>
            <PrimaryTextButton variant="text" theme={theme} {...args} />
        </>
    )
}
export const ButtonTextSecondary = ({ ...args }) => {
    return (
        <>
            <SecondaryTextButton variant="text" theme={theme} {...args} />
        </>
    )
}
export const ButtonTextTertiary = ({ ...args }) => {
    return (
        <>
            <TertiaryTextButton variant="text" theme={theme} {...args} />
        </>
    )
}

ButtonTextPrimary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}

ButtonTextSecondary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}
ButtonTextTertiary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}
