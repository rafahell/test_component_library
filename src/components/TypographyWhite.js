import React from 'react'
import * as PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { ds } from '../../.storybook/dsTheme'
import { styled } from '@mui/material/styles'

const TypographyWhiteComponent = styled(Typography)(() => ({
    color: ds.color.shade_0,
    '.MuiTypography-h1': {
        fontSize: ds.typography.h1.fontSize,
    },
    '.MuiTypography-h2': {
        fontSize: ds.typography.h2.fontSize,
    },
    '.MuiTypography-h3': {
        fontSize: ds.typography.h3.fontSize,
    },
    '.MuiTypography-h4': {
        fontSize: ds.typography.h4.fontSize,
    },
    '.MuiTypography-h5': {
        fontSize: ds.typography.h5.fontSize,
    },
}))

export const ComponentTypographyWhite = ({ children, ...args }) => {
    return (
        <>
            <TypographyWhiteComponent {...args}>
                {children}
            </TypographyWhiteComponent>
        </>
    )
}

ComponentTypographyWhite.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}
