import * as React from 'react'
import * as PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const AlertErrorComponent = styled(Alert)(() => ({
    '&.MuiTypography-root-MuiAlertTitle-root': {
        fontSize: '1rem',
    },
    '&.MuiAlertTitle-root': {
        color: ds.color.error_400,
        borderRadius: '8px',
    },
}))
const AlertWarningComponent = styled(Alert)(() => ({
    '&.MuiAlert-root': {
        color: ds.color.error_400,
        borderRadius: '8px',
    },
    '& .MuiAlertTitle': {
        fontSize: '1rem',
    },
}))
const AlertInfoComponent = styled(Alert)(() => ({
    '&.MuiAlert-root': {
        color: ds.color.secondary_100,
        borderRadius: '8px',
    },
    '&.MuiAlertTitle': {
        fontSize: '1rem',
    },
}))
const AlertSuccessComponent = styled(Alert)(() => ({
    '&.MuiAlert-root': {
        color: ds.color.primary_400,
        borderRadius: '8px',
    },
    '&.MuiAlertTitle': {
        fontSize: '1rem',
    },
}))

export const AlertError = ({ title, content, ...args }) => {
    return (
        <>
            <AlertErrorComponent severity="error" theme={theme} {...args}>
                {title ? <AlertTitle>{title}</AlertTitle> : ''}
                {content}
            </AlertErrorComponent>
        </>
    )
}
export const AlertWarning = ({ title, content, ...args }) => {
    return (
        <>
            <AlertWarningComponent severity="warning" theme={theme} {...args}>
                {title ? <AlertTitle>{title}</AlertTitle> : ''}
                {content}
            </AlertWarningComponent>
        </>
    )
}
export const AlertInfo = ({ title, content, ...args }) => {
    return (
        <>
            <AlertInfoComponent severity="info" theme={theme} {...args}>
                {title ? <AlertTitle>{title}</AlertTitle> : ''}
                {content}
            </AlertInfoComponent>
        </>
    )
}
export const AlertSuccess = ({ title, content, ...args }) => {
    return (
        <>
            <AlertSuccessComponent severity="success" theme={theme} {...args}>
                {title ? <AlertTitle>{title}</AlertTitle> : ''}
                {content}
            </AlertSuccessComponent>
        </>
    )
}

AlertError.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}
AlertWarning.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}
AlertInfo.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}
AlertSuccess.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}
