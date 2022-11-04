import * as React from 'react'
import * as PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'

import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const size = {
    small: ds.avatar_css_props.size_variant.height_small,
    medium: ds.avatar_css_props.size_variant.height_medium,
    large: ds.avatar_css_props.size_variant.height_large,
}

const fontSize = {
    small: ds.avatar_css_props.size_variant.font_small,
    medium: ds.avatar_css_props.size_variant.font_medium,
    large: ds.avatar_css_props.size_variant.font_large,
}

const AvatarComponent = styled(Avatar)((args) => ({
    height: size[args.size],
    width: size[args.size],
    fontSize: fontSize[args.size],
    backgroundColor: args.bgcolor,
}))

function stringToInitials(string) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
    let initials = [...string.matchAll(rgx)] || []
    initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase()
    return initials
}

export const ComponentAvatar = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)
    let initials = stringToInitials(args.alt)

    return (
        <>
            <AvatarComponent
                {...args}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                {initials}
            </AvatarComponent>
        </>
    )
}

ComponentAvatar.propTypes = {
    size: PropTypes.string,
    bgcolor: PropTypes.string,
}

// function stringToColor(string) {
//     let hash = 0
//     let i
//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//         hash = string.charCodeAt(i) + ((hash << 5) - hash)
//     }

//     let color = '#'

//     for (i = 0; i < 3; i += 1) {
//         const value = (hash >> (i * 8)) & 0xff
//         color += `00${value.toString(16)}`.slice(-2)
//     }
//     /* eslint-enable no-bitwise */
//     return color
// }
