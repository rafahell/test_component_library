import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { PersonAddAltSharp } from '@mui/icons-material'

import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const size = {
    small: ds.button_css_props.size_variant.height_small,
    medium: ds.button_css_props.size_variant.height_medium,
    large: ds.button_css_props.size_variant.height_large,
}

const PrimaryButton = styled(Button)((args) => ({
    height: size[args.size],
    backgroundColor: ds.color.primary_400,
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    '&:hover': {
        backgroundColor: ds.button_css_props.secondary_hover_bg,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.button_css_props.secondary_disabled_bg,
        color: ds.button_css_props.secondary_disabled_color,
    },
}))

const SecondaryButton = styled(Button)((args) => ({
    height: size[args.size],
    backgroundColor: ds.color.secondary_400,
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    '&:hover': {
        backgroundColor: ds.button_css_props.primary_hover_bg,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.button_css_props.primary_disabled_bg,
        color: ds.button_css_props.primary_disabled_color,
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

    '& .MuiSvgIcon-root': {
        // marginRight: '10px',
        width: '1rem',
        height: '1rem',
    },
}))

const ErrorButton = styled(Button)((args) => ({
    height: size[args.size],
    backgroundColor: ds.color.error_400,
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    '&:hover': {
        backgroundColor: ds.button_css_props.error_hover_bg,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.button_css_props.error_disabled_bg,
        color: ds.button_css_props.error_disabled_color,
    },
}))
const WarningButton = styled(Button)((args) => ({
    height: size[args.size],
    backgroundColor: ds.color.warning_400,
    margin: ds.button_css_props.margin,
    borderRadius: ds.button_css_props.radius,
    boxShadow: ds.button_css_props.none,
    textTransform: ds.button_css_props.none,
    '&:hover': {
        backgroundColor: ds.button_css_props.warning_hover_bg,
    },
    '&.Mui-disabled': {
        backgroundColor: ds.button_css_props.warning_disabled_bg,
        color: ds.button_css_props.warning_disabled_color,
    },
}))

const GroupButton = styled(ButtonGroup)(() => ({
    '& .MuiButtonGroup-groupedContainedPrimary': {
        backgroundColor: ds.color.secondary_400,
        borderRadius: ds.button_css_props.radius,
        boxShadow: ds.button_css_props.none,
        textTransform: ds.button_css_props.none,
    },
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
        borderColor: ds.color.shade_0,
        padding: '8px 20px',
    },
    '& .MuiButtonGroup-grouped:not(:last-of-type):hover,& .MuiButtonGroup-grouped:not(:first-of-type):hover':
        {
            backgroundColor: ds.button_css_props.primary_hover_bg,
        },
    '&.Mui-disabled': {
        backgroundColor: ds.button_css_props.warning_disabled_bg,
        color: ds.button_css_props.warning_disabled_color,
    },
}))
const GroupButtonOutline = styled(ButtonGroup)(() => ({
    '& .MuiButtonGroup-groupedOutlinedPrimary': {
        color: ds.color.secondary_400,
        borderRadius: ds.button_css_props.radius,
        boxShadow: ds.button_css_props.none,
        textTransform: ds.button_css_props.none,
    },
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
        color: ds.color.secondary_400,
        borderColor: ds.color.secondary_400,
        padding: '8px 20px',
    },
    '& .MuiButtonGroup-grouped:not(:first-of-type)': {
        color: ds.color.secondary_400,
        borderColor: ds.color.secondary_400,
    },
    '& .MuiButtonGroup-grouped:not(:last-of-type):hover,& .MuiButtonGroup-grouped:not(:first-of-type):hover':
        {
            backgroundColor: ds.button_css_props.primary_blue_100,
        },
    '&.MuiButtonGroup-outlined .Mui-disabled, &.MuiButtonGroup-grouped:not(:last-of-type), &git ad.MuiButtonGroup-grouped:not(:first-of-type)':
        {
            opacity: 0.3,
        },
}))

export const ButtonPrimary = ({ ...args }) => {
    return (
        <>
            <PrimaryButton variant="contained" theme={theme} {...args} />
        </>
    )
}
export const ButtonSecondary = ({ ...args }) => {
    return (
        <>
            <SecondaryButton variant="contained" theme={theme} {...args} />
        </>
    )
}
export const ButtonError = ({ ...args }) => {
    return (
        <>
            <ErrorButton variant="contained" theme={theme} {...args} />
        </>
    )
}
export const ButtonWarning = ({ ...args }) => {
    return (
        <>
            <WarningButton variant="contained" theme={theme} {...args} />
        </>
    )
}

export const ButtonIcon = ({ ...args }) => {
    return (
        <>
            <PrimaryButton
                variant="contained"
                startIcon={<PersonAddAltSharp />}
                theme={theme}
                {...args}
            />
        </>
    )
}

export const ButtonsGroup = ({ ...args }) => {
    return (
        <>
            <GroupButton variant="contained" theme={theme} {...args}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </GroupButton>
        </>
    )
}
export const ButtonsGroupOutline = ({ ...args }) => {
    return (
        <>
            <GroupButtonOutline variant="outlined" theme={theme} {...args}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </GroupButtonOutline>
        </>
    )
}

ButtonPrimary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

ButtonSecondary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}
ButtonError.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}
ButtonWarning.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
}
ButtonIcon.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    startIcon: PropTypes.element,
}
ButtonsGroup.propTypes = {
    onClick: PropTypes.func,
}
ButtonsGroupOutline.propTypes = {
    onClick: PropTypes.func,
}
