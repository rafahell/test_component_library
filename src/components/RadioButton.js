import * as React from 'react'
import * as PropTypes from 'prop-types'
import Radio from '@mui/material/Radio'
import { styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const RadioIcon = styled('span')(() => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: `inset 0 0 0 2px ${ds.color.neutral_300}, inset 0 -2px 0 ${ds.color.neutral_300}`,
    backgroundColor: ds.color.shade_0,
    backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: `2px auto ${ds.color.neutral_300}`,
        outlineOffset: 2,
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: ds.color.neutral_300,
    },
}))

const RadioIconChecked = styled(RadioIcon)({
    backgroundColor: ds.color.primary_400,
    boxShadow: 'none',
    backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: `radial-gradient(${ds.color.shade_0},${ds.color.shade_0} 28%,transparent 32%)`,
        content: '""',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        cursor: 'not-allowed',
        backgroundImage:
            'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        background: ds.color.primary_400,
        opacity: '70%',
    },
    'input:disabled ~ &:before': {
        cursor: 'not-allowed',
        backgroundImage: `radial-gradient(${ds.color.shade_0},${ds.color.shade_0} 28%,transparent 32%)`,
    },
})

function RadioComponent({ ...args }) {
    return (
        <Radio
            checkedIcon={<RadioIconChecked />}
            icon={<RadioIcon />}
            {...args}
        />
    )
}

export const ComponentRadio = ({ ...args }) => {
    return (
        <>
            <RadioComponent {...args} />
        </>
    )
}

ComponentRadio.propTypes = {
    onClick: PropTypes.func,
}
