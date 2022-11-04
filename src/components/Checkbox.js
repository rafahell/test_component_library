import * as React from 'react'
import * as PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const CheckBoxIcon = styled('span')(() => ({
    border: `2px solid ${ds.color.neutral_300}`,
    borderRadius: 4,
    width: 16,
    height: 16,
    // boxShadow:
    //     'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    // backgroundColor: ds.color.primary_400,
    // color: ds.color.neutral_300,
    // backgroundImage:
    //     'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    // '.Mui-focusVisible &': {
    //     outline: '2px auto rgba(19,124,189,.6)',
    //     outlineOffset: 2,
    // },
    // 'input:hover ~ &': {
    //     backgroundColor: 'transparent',
    // },
    'input:disabled ~ &': {
        // boxShadow: `inset 0 0 0 1px ${ds.color.neutral_300}, inset 0 -1px 0 ${ds.color.neutral_300}`,
        background: ds.color.neutral_300,
    },
}))

const CheckBoxIconChecked = styled(CheckBoxIcon)({
    width: 20,
    height: 20,
    border: 'none',
    borderRadius: 4,
    backgroundColor: ds.color.primary_400,
    color: ds.color.primary_400,
    backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        borderRadius: 4,
        backgroundColor: ds.color.primary_400,
        opacity: '70%',
        cursor: 'not-allowed',
        display: 'block',
        width: 20,
        height: 20,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: ds.color.primary_400,
    },
})

// const CheckboxComponent = styled(Checkbox)(() => ({
//     '&.MuiCheckbox-root': {
//         color: ds.color.neutral_300,
//     },
//     '&.Mui-checked': {
//         color: ds.color.primary_400,
//     },
//     '&.Mui-disabled': {
//         // boxShadow: 'none',
//         // color: ds.color.neutral_300,
//         // pointerEvents: 'auto',
//         // cursor: 'not-allowed',
//         // '&.MuiSvgIcon-root': {
//         //     backgroundColor: ds.color.neutral_300,
//         // },
//     },
// }))

// export const ComponentCheckbox = ({ ...args }) => {
//     return (
//         <>
//             <CheckboxComponent theme={theme} {...args} />
//             {/* <CustomCheckbox disabled
//         theme={theme}
//         {...props}

//       />
//       <CustomCheckbox checked disabled
//         theme={theme}
//         {...props}

//       /> */}
//         </>
//     )
// }
function CheckboxComponent({ ...args }) {
    return (
        <Checkbox
            checkedIcon={<CheckBoxIconChecked />}
            icon={<CheckBoxIcon />}
            {...args}
        />
    )
}

export const ComponentCheckbox = ({ ...args }) => {
    return (
        <>
            <CheckboxComponent {...args} />
        </>
    )
}

ComponentCheckbox.propTypes = {
    onClick: PropTypes.func,
}
