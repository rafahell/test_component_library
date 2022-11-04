import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import SearchIcon from '@mui/icons-material/Search'

const LoginIcon = styled(PersonAddAltIcon)(() => ({
    //    color: ds.color.secondary_400,
}))

const ChartIcon = styled(SsidChartIcon)(() => ({
    //color: ds.color.secondary_400,
}))

const SearchingIcon = styled(SearchIcon)(() => ({
    //color: ds.color.secondary_400,
}))

export const IconLogin = ({ ...props }) => {
    return (
        <>
            <LoginIcon variant="contained" theme={ds} {...props} />
        </>
    )
}
export const IconChart = ({ ...props }) => {
    return (
        <>
            <ChartIcon variant="contained" theme={ds} {...props} />
        </>
    )
}

export const IconSearching = ({ ...props }) => {
    return (
        <>
            <SearchingIcon variant="contained" theme={ds} {...props} />
        </>
    )
}

IconLogin.propTypes = {}

IconChart.propTypes = {}

IconSearching.propTypes = {}
// IconPrimary.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     size: 'medium',
//     onClick: undefined,
// }

// export default IconPrimary
