import * as React from 'react'
import * as PropTypes from 'prop-types'
import Switch from '@mui/material/Switch'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const SwitchComponent = styled(Switch)(() => ({
    width: 42,
    height: 26,
    padding: 0,
    '&.MuiSwitch-root': {
        borderRadius: '20px',
    },
    '& .MuiSwitch-track': {
        backgroundColor: ds.color.neutral_300,
        opacity: 1,
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: ds.color.neutral_400,
        boxSizing: 'border-box',
        width: 18,
        height: 18,
        margin: '-5px -5px',
    },
    '& .Mui-disabled + .MuiSwitch-track': {
        backgroundColor: ds.color.neutral_300,
        opacity: 0.7 + '!important',
    },
    '& .Mui-checked': {
        '.MuiSwitch-thumb': {
            opacity: 1,
            backgroundColor: ds.color.shade_0,
            margin: '-5px -9px',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: ds.color.neutral_300,
            opacity: 0.7 + '!important',
        },

        '&.Mui-disabled + .MuiSwitch-thumb': {
            backgroundColor: ds.color.neutral_400,
            opacity: 0.7,
        },

        '+ .MuiSwitch-track': {
            backgroundColor: `${ds.color.primary_400} !important`,
            opacity: 1 + '!important',
        },
    },

    // '& .Mui-checked + .MuiSwitch-track': {
    //     backgroundColor: `${ds.color.primary_400} !important`,
    //     opacity: 1,
    // },

    // width: 42,
    // height: 26,
    // padding: 0,
    // '& .MuiSwitch-switchBase': {
    //     padding: 0,
    //     margin: 2,
    //     transitionDuration: '300ms',
    //     backgroundColor: ds.color.neutral_400,
    //     '& .MuiSwitch-thumb': {
    //         backgroundColor: ds.color.neutral_300,
    //     },
    //     '.MuiSwitch-track': {
    //         backgroundColor: ds.color.neutral_300,
    //     },
    //     '&.Mui-checked': {
    //         transform: 'translateX(16px)',
    //         color: ds.color.shade_0,
    //         '& + .MuiSwitch-track': {
    //             backgroundColor: ds.color.primary_400,
    //             opacity: 1,
    //             border: `6px solid ${ds.color.white}`,
    //         },
    //         '&.Mui-disabled + .MuiSwitch-track': {
    //             backgroundColor: ds.color.neutral_300,
    //             opacity: 0.7,
    //         },

    //         '& .MuiSwitch-thumb': {
    //             backgroundColor: ds.color.shade_0,
    //         },

    //         '&.Mui-disabled + .MuiSwitch-thumb': {
    //             backgroundColor: ds.color.neutral_400,
    //             opacity: 0.7,
    //         },
    //     },
    //     '&.Mui-focusVisible .MuiSwitch-thumb': {
    //         color: ds.color.primary_400,
    //         border: `6px solid ${ds.color.white}`,
    //     },
    //     '&.Mui-disabled .MuiSwitch-thumb': {
    //         color: ds.color.neutral_400,
    //         opacity: 0.7,
    //     },
    //     '&.Mui-disabled + .MuiSwitch-track': {
    //         backgroundColor: ds.color.neutral_300,
    //         opacity: 0.7,
    //     },
    // },
    // '& .MuiSwitch-thumb': {
    //     boxSizing: 'border-box',
    //     width: 18,
    //     height: 18,
    //     marginTop: 2,
    // },
    // '& .MuiSwitch-track': {
    //     borderRadius: 26 / 2,
    //     backgroundColor: ds.color.neutral_300,
    //     opacity: 0.7,
    //     transition: theme.transitions.create(['background-color'], {
    //         duration: 500,
    //     }),
    // },
}))

export const ComponentSwitch = ({ ...args }) => {
    return (
        <>
            <SwitchComponent variant="contained" theme={theme} {...args} />
        </>
    )
}

ComponentSwitch.propTypes = {
    onClick: PropTypes.func,
}
