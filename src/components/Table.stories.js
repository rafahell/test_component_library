import React from 'react'
import { ComponentTable } from './Table'
import { ButtonPrimary } from './Button'

export default {
    title: 'Components/Table',
    component: ComponentTable,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentTable } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentTable {...args} />
export const ReusableTable = Template.bind({})
ReusableTable.args = {
    tbodyData: [
        {
            id: '1',
            items: ['John', 'john@email.com', '01/01/2021'],
        },
        {
            id: '2',
            items: ['Sally', 'sally@email.com', '12/24/2020'],
        },
        {
            id: '3',
            items: [
                'Maria',
                'maria@email.com',
                <ButtonPrimary key="diad">Edit</ButtonPrimary>,
            ],
        },
    ],
    theadData: ['Name', 'Email', 'Date'],
}
