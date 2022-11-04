import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Pagination } from '@mui/material'

import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: ds.color.primary_400,
            contrastText: '#fff',
            dark: ds.color.primary_400,
            hover: ds.color.shade_100_gren_100,
        },
    },
    typography: {
        fontFamily: 'Lato',
        caption: {
            fontWeight: 700,
        },
    },
})

const PaginationComponent = styled(Pagination)((args) => ({
    count: args.count,
    defaultPage: args.defaultPage,
}))

export const ComponentPagination = ({ ...args }) => {
    // let backgroundColor = stringToColor(args.alt)

    return (
        <>
            <ThemeProvider theme={theme}>
                <PaginationComponent
                    color="primary"
                    count={args.count}
                    defaultPage={args.defaultPage}
                    sx={{}}
                    shape="rounded"
                />
            </ThemeProvider>
        </>
    )
}

ComponentPagination.propTypes = {
    count: PropTypes.string,
    defaultPage: PropTypes.string,
}
