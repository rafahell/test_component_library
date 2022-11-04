import * as React from 'react'
import * as PropTypes from 'prop-types'
import Chip from '@mui/material/Chip'

import { styled, createTheme } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'
import { ComponentAvatar } from './Avatar'

const theme = createTheme({})
const size = {
    small: ds.chip_css_props.size_variant.height_small,
    medium: ds.chip_css_props.size_variant.height_medium,
    large: ds.chip_css_props.size_variant.height_large,
}

const PrimaryChip = styled(Chip)((args) => ({
    height: size[args.size],
    borderRadius: ds.chip_css_props.radius,

    //   style={{ backgroundColor: '#00ff00', color: "white" }}
    boxShadow: ds.button_css_props.none,
    //  textTransform: ds.button_css_props.none,
}))

export const ChipPrimary = ({ ...args }) => {
    return (
        <>
            <PrimaryChip
                variant="contained"
                theme={theme}
                typography={ds.typography.body1}
                style={{ backgroundColor: args.bgColor, color: args.textColor }}
                {...args}
            />
        </>
    )
}

ChipPrimary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['outlined', 'filled']),
    onDelete: PropTypes.func,
}

const AvatarChip = styled(Chip)((args) => ({
    height: size[args.size],
    borderRadius: ds.chip_css_props.radius,
    boxShadow: ds.button_css_props.none,
    //  textTransform: ds.button_css_props.none,
}))

export const ChipAvatar = ({ ...args }) => {
    return (
        <>
            <AvatarChip
                variant="contained"
                theme={theme}
                {...args}
                style={{ backgroundColor: args.bgColor, color: args.textColor }}
                avatar={<ComponentAvatar alt={args.alt} src={args.src} />}
            />
        </>
    )
}

ChipAvatar.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['outlined', 'filled']),
    onDelete: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
}
