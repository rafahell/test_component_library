import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const size = {
    small: ds.button_css_props.size_variant.height_small,
    medium: ds.button_css_props.size_variant.height_medium,
    large: ds.button_css_props.size_variant.height_large,
}

const PrimaryOutlineButton = styled(Button)((args) => ({
    height: size[args.size],
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.secondary_400,
    border: '1px solid' + ds.color.secondary_400,
    '&:hover': {
        backgroundColor: ds.color.secondary_200,
        border: '1px solid' + ds.color.secondary_400,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.color.shade_0,
        color: ds.color.secondary_400,
        border: '1px solid' + ds.color.secondary_400,
        opacity: 0.3,
    },
    '&.MuiButton-sizeSmall': {
        padding: ds.button_css_props.size_variant.padding_small,
    },
    '&.MuiButton-sizeMedium': {
        padding: ds.button_css_props.size_variant.padding_medium,
    },
    '&.MuiButton-sizeLarge': {
        padding: ds.button_css_props.size_variant.padding_large,
        minWidth: ds.button_css_props.size_variant.min_width,
    },
}))

const SecondaryOutlineButton = styled(Button)((args) => ({
    height: size[args.size],
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.primary_400,
    border: '1px solid' + ds.color.primary_400,
    '&:hover': {
        backgroundColor: ds.color.primary_100,
        border: '1px solid' + ds.color.primary_400,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.color.shade_0,
        color: ds.color.primary_400,
        border: '1px solid' + ds.color.primary_400,
        opacity: 0.3,
    },
}))

const TertiaryOutlineButton = styled(Button)((args) => ({
    height: size[args.size],
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    color: ds.color.error_400,
    border: '1px solid' + ds.color.error_400,
    '&:hover': {
        backgroundColor: ds.color.error_100,
        border: '1px solid' + ds.color.error_400,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.color.shade_0,
        color: ds.color.error_400,
        border: '1px solid' + ds.color.error_400,
        opacity: 0.3,
    },
}))

export const ButtonOutlinePrimary = ({ ...args }) => {
    return (
        <>
            <PrimaryOutlineButton variant="outlined" theme={theme} {...args} />
        </>
    )
}
export const ButtonOutlineSecondary = ({ ...args }) => {
    return (
        <>
            <SecondaryOutlineButton
                variant="outlined"
                theme={theme}
                {...args}
            />
        </>
    )
}
export const ButtonOutlineTertiary = ({ ...args }) => {
    return (
        <>
            <TertiaryOutlineButton variant="outlined" theme={theme} {...args} />
        </>
    )
}

ButtonOutlinePrimary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
}

ButtonOutlineSecondary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
}
ButtonOutlineTertiary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
}
