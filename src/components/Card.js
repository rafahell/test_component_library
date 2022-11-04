import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const CardComponentShadowSoft = styled(Card)(() => ({
    boxShadow: ds.shadows.softShadow.boxShadow,
    padding: '20px',
}))
const CardComponentShadowHard = styled(Card)(() => ({
    boxShadow: ds.shadows.hardShadow.boxShadow,
    padding: '20px',
}))
const CardComponentShadowNone = styled(Card)(() => ({
    boxShadow: 'none',
    padding: '20px',
}))

export const ComponentCardShadowSoft = ({ ...args }) => {
    return (
        <>
            <CardContent sx={{ padding: '16px' }}>
                <CardComponentShadowSoft
                    variant="outlined"
                    {...args}
                ></CardComponentShadowSoft>
            </CardContent>
        </>
    )
}
export const ComponentCardShadowHard = ({ ...args }) => {
    return (
        <>
            <CardContent>
                <CardComponentShadowHard
                    variant="outlined"
                    {...args}
                ></CardComponentShadowHard>
            </CardContent>
        </>
    )
}
export const ComponentCardShadowNone = ({ ...args }) => {
    return (
        <>
            <CardContent>
                <CardComponentShadowNone
                    variant="outlined"
                    {...args}
                ></CardComponentShadowNone>
            </CardContent>
        </>
    )
}

// ComponentCardShadowSoft.propTypes = {
//     children: PropTypes.object,
// }
// ComponentCardShadowHard.propTypes = {
//     children: PropTypes.object,
// }
// ComponentCardShadowNone.propTypes = {
//     children: PropTypes.object,
// }
