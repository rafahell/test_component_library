import React from 'react'
import * as PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { ds } from '../../.storybook/dsTheme'
import { styled } from '@mui/material/styles'

const TypographyComponent = styled(Typography)(() => ({
    color: ds.color.shade_100_dark,
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
    '.MuiTypography-body2': {
        fontSize: ds.typography.h2.fontSize,
    },
}))

export const ComponentTypography = ({ children, ...args }) => {
    return (
        <>
            <TypographyComponent {...args}>{children}</TypographyComponent>
        </>
    )
}

// /**
//  * Primary UI component for user interaction
//  */
// export const TypographyView = () => {
//     return (
//         <>
//             <Box sx={{ flexGrow: 1 }}>
//                 <h1
//                     variant="h1"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h1,
//                         color: ds.color.secondary_400,
//                     }}
//                 >
//                     H1 / Lato Bold
//                 </h1>
//             </Box>

//             <Box
//                 sx={{
//                     flexGrow: 1,
//                     bgcolor: ds.color.secondary_400,
//                 }}
//             >
//                 <Typography
//                     variant="h1"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h1,
//                         color: ds.color.shade_0,
//                         lineHeight: ds.typography.h1,
//                     }}
//                 >
//                     H1 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h2"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h2,

//                         color: ds.color.secondary_400,
//                     }}
//                 >
//                     H2 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h3"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h3,
//                         color: ds.color.secondary_400,
//                     }}
//                 >
//                     H3 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h3"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h3,
//                         color: ds.color.primary_400,
//                     }}
//                 >
//                     H3 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h4,
//                         color: ds.color.secondary_400,
//                     }}
//                 >
//                     H4 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h4,
//                         color: ds.color.primary_400,
//                     }}
//                 >
//                     H4 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h4,
//                         color: ds.color.shade_100_grey_primary,
//                     }}
//                 >
//                     H4 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box
//                 sx={{
//                     flexGrow: 1,
//                     bgcolor: ds.color.secondary_400,
//                 }}
//             >
//                 <Typography
//                     variant="h5"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.h5,
//                         color: ds.color.shade_0,
//                     }}
//                 >
//                     H5 / Lato Bold
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="caption"
//                     component="div"
//                     sx={{
//                         flexGrow: 1,
//                         typography: ds.typography.caption,

//                         color: ds.color.secondary_400,
//                     }}
//                 >
//                     Caption / Lato Bold
//                 </Typography>
//             </Box>
//         </>
//     )
// }

ComponentTypography.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}
