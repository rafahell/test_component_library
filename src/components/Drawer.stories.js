import React from 'react'
import { ComponentDrawer } from './Drawer'

export default {
    title: 'Components/Drawer',
    component: ComponentDrawer,
    parameters: {
        docs: {
            description: {
                component:
                    '_import { ComponentDrawer } from "test-component-library"_',
            },
        },
    },
}

const Template = (args) => <ComponentDrawer {...args} />
export const Drawer = Template.bind({})
Drawer.args = {
    menuList: ['Inbox', 'Starred', 'Send email', 'Drafts'],
    content: (
        <>
            <h1>Hello</h1>
        </>
    ),
    title: 'Resposive Drawer',
    icon: ['notifications', 'inbox', 'drafts', 'notifications'],
}
