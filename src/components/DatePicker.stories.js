import React from 'react'
import { WeekPicker, DayPicker } from './DatePicker'

export default {
    title: 'Components/DatePicker',
    component: WeekPicker,
    DayPicker,
}

const Template = (args) => <WeekPicker {...args} />
export const WeekSelect = Template.bind({})
WeekSelect.args = {
    label: 'Custom Week Picker',
}

const Template2 = (args) => <DayPicker {...args} />
export const DaySelect = Template2.bind({})
DaySelect.args = {
    label: 'Custom Day Picker',
}
