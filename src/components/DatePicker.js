import * as React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import endOfWeek from 'date-fns/endOfWeek'
import isSameDay from 'date-fns/isSameDay'
import isWithinInterval from 'date-fns/isWithinInterval'
import startOfWeek from 'date-fns/startOfWeek'

import { ds } from '../../.storybook/dsTheme'

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
        prop !== 'dayIsBetween' &&
        prop !== 'isFirstDay' &&
        prop !== 'isLastDay' &&
        prop !== 'selectedDate',
})(({ dayIsBetween, isFirstDay, isLastDay, selectedDate }) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        typography: ds.typography.h5,
        backgroundColor: ds.color.secondary_400,
        color: ds.color.shade_0,
        '&:hover, &:focus': {
            backgroundColor: ds.color.primary_400,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
    }),
    ...(selectedDate && {
        backgroundColor: ds.color.error_400_primary,
    }),
}))

export const WeekPicker = () => {
    const [value, setValue] = React.useState(new Date())

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
            return <PickersDay {...pickersDayProps} />
        }

        const start = startOfWeek(value)
        const end = endOfWeek(value)

        const dayIsBetween = isWithinInterval(date, { start, end })
        const isFirstDay = isSameDay(date, start)
        const isLastDay = isSameDay(date, end)

        return (
            <CustomPickersDay
                {...pickersDayProps}
                disableMargin
                dayIsBetween={dayIsBetween}
                isFirstDay={isFirstDay}
                isLastDay={isLastDay}
            />
        )
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                }}
                renderDay={renderWeekPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d"
            />
        </LocalizationProvider>
    )
}

export const DayPicker = () => {
    const [value, setValue] = React.useState(new Date())

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
            return <PickersDay {...pickersDayProps} />
        }

        //    const start = startOfWeek(value)
        //    const end = endOfWeek(value)

        //    const dayIsBetween = isWithinInterval(date, { start, end })
        //    const isFirstDay = isSameDay(date, start)
        //    const isLastDay = isSameDay(date, end)

        return (
            <CustomPickersDay
                {...pickersDayProps}
                disableMargin
                selectedDate={date}
            />
        )
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Day picker"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                }}
                renderDay={renderWeekPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d"
            />
        </LocalizationProvider>
    )
}
