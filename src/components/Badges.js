import * as React from 'react'
import * as PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import Badge from '@mui/material/Badge'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const BadgeComponent = styled(
    Badge,
    Icon,
    IconButton
)(() => ({
    '& .MuiButtonBase-root': {
        color: ds.color.secondary_400,
    },
    '& .MuiIcon-root': {
        fontSize: '2.2em',
    },
    color: ds.color.secondary_400,
    '& .MuiBadge-badge': {
        backgroundColor: ds.palette.outline.secondary_light_d,
        right: '15px',
        top: '15px',
        outline: '3px solid ' + ds.color.shade_0,
    },
}))

const notificationsLabel = (count) => {
    if (count === 0) {
        return 'no notifications'
    }
    if (count > 99) {
        return 'more than 99 notifications'
    }
    return `${count} notifications`
}

export const ComponentBadge = ({ ...args }) => {
    return (
        <>
            <IconButton aria-label={notificationsLabel(args.badgeContent)}>
                <BadgeComponent
                    badgeContent={30}
                    color="secondary"
                    theme={theme}
                    {...args}
                >
                    <IconButton>
                        <Icon>{args.icon}</Icon>
                    </IconButton>
                </BadgeComponent>
            </IconButton>
        </>
    )
}

export const ComponentBadgeDot = ({ ...args }) => {
    return (
        <>
            <IconButton aria-label={args.icon}>
                <BadgeComponent
                    badgeContent=" "
                    variant="dot"
                    color="secondary"
                    theme={theme}
                    {...args}
                >
                    <Icon>{args.icon}</Icon>
                </BadgeComponent>
            </IconButton>
        </>
    )
}

ComponentBadge.propTypes = {
    onClick: PropTypes.func,
    badgeContent: PropTypes.number,
}
ComponentBadgeDot.propTypes = {
    onClick: PropTypes.func,
}
