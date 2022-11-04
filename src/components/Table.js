import * as React from 'react'
import * as PropTypes from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'

import { createTheme, styled } from '@mui/material/styles'

// import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const TableComponent = styled(TableContainer)(() => ({}))

const TableHeadItem = ({ item }) => {
    return <TableCell title={item}>{item}</TableCell>
}

const TableRows = ({ data }) => {
    return (
        <>
            {data.map((item, index) => {
                return <TableCell key={'tr' + index}>{item}</TableCell>
            })}
        </>
    )
}

export const ComponentTable = ({ theadData, tbodyData, ...args }) => {
    return (
        <>
            <TableComponent theme={theme} {...args}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {theadData.map((h, index) => {
                                return (
                                    <TableHeadItem
                                        key={'th' + index}
                                        item={h}
                                    ></TableHeadItem>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tbodyData.map((item, index) => {
                            return (
                                <TableRow key={'tbody' + index}>
                                    <TableRows data={item.items} />
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableComponent>
        </>
    )
}

ComponentTable.propTypes = {
    theadData: PropTypes.node,
    tbodyData: PropTypes.array,
}

TableHeadItem.propTypes = {
    item: PropTypes.any,
}

TableRows.propTypes = {
    data: PropTypes.array,
}
