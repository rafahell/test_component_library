import * as React from 'react'
import * as PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
// import IconButton from '@mui/material/IconButton'
// import Visibility from '@mui/icons-material/Visibility'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { createTheme, styled } from '@mui/material/styles'
import { ds } from '../../.storybook/dsTheme'

const theme = createTheme({})

const InfoIConRed = styled(InfoOutlinedIcon)(() => ({
    '&.MuiSvgIcon-root': {
        color: ds.color.error_400,
        width: '0.65em',
        height: '0.65em',
    },
}))

const TextFieldComponent = styled(TextField)(() => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: ds.color.shade_100_dark,
    '& label': {
        color: ds.color.neutral_500,
    },
    '&:hover label': {
        color: ds.color.neutral_500,
    },
    '& label.Mui-focused': {
        color: ds.color.neutral_500,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: ds.color.neutral_300,
    },
    '&.MuiTextField-root p ': {
        color: ds.color.neutral_400,
    },
    // '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //         borderColor: ds.color.neutral_300,
    //     },
    //     '&:hover fieldset': {
    //         borderColor: ds.color.neutral_300,
    //         borderWidth: 2,
    //     },
    //     '&.Mui-focused fieldset': {
    //         borderColor: ds.color.neutral_300,
    //     },
    // },
}))

const TextFieldDisabledComponent = styled(TextField)(() => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: ds.color.shade_100_dark,
    '& label': {
        color: ds.color.neutral_500,
    },
    '&:hover label': {
        color: ds.color.neutral_500,
    },
    '& label.Mui-focused': {
        color: ds.color.neutral_500,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: ds.color.neutral_300,
    },

    '& .Mui-disabled:before': {
        // borderBottomStyle: 'solid !important',
        borderBottom: '1px solid ' + ds.color.neutral_300,
    },
}))

const TextFieldPasswordComponent = styled(TextField)(() => ({
    fontSize: '14px',
    fontWeight: 'bold',
    // color: ds.color.shade_100_dark,
    '& label': {
        color: ds.color.neutral_500,
    },
    '&:hover label': {
        color: ds.color.neutral_500,
    },
    '& label.Mui-focused': {
        color: ds.color.neutral_500,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: ds.color.neutral_300,
    },

    // '&.MuiTextField-root p ': {
    //     color: ds.color.neutral_400,
    // },

    '& .MuiFormHelperText-root': {
        color: ds.color.error_400,
    },

    '&.MuiTextField-root p.Mui-error': {
        color: ds.color.error_400,
    },
    '& .Mui-error': {
        color: ds.color.error_400,
    },

    '& .MuiSvgIcon-root': {
        width: '0.75em',
        height: '0.75em',
    },
}))

export const ComponentTextField = ({ ...args }) => {
    return (
        <>
            <TextFieldComponent
                theme={theme}
                type="text"
                variant="standard"
                {...args}
            />
        </>
    )
}

export const ComponentTextFieldPassword = ({ ...args }) => {
    return (
        <>
            <TextFieldPasswordComponent
                theme={theme}
                variant="standard"
                type="password"
                error={args.value.length <= 7 && args.value.length >= 3}
                helperText={
                    args.value.length <= 7 && args.value.length >= 3
                        ? 'A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.'
                        : ''
                }
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {args.value.length <= 7 &&
                            args.value.length >= 3 ? (
                                <InfoIConRed />
                            ) : (
                                ''
                            )}
                        </InputAdornment>
                    ),
                }}
                {...args}
            />
        </>
    )
}

export const ComponentTextFieldDisabled = ({ ...args }) => {
    return (
        <>
            <TextFieldDisabledComponent
                disabled
                theme={theme}
                type="text"
                variant="standard"
                {...args}
            />
        </>
    )
}

// export const ComponentTextFieldPassword = ({ ...args }) => {
//     const [values, setValues] = React.useState({
//         showPassword: false,
//     })

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value })
//     }

//     const handleClickShowPassword = () => {
//         setValues({
//             ...values,
//             showPassword: !values.showPassword,
//         })
//     }

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault()
//     }
//     return (
//         <>
//             <TextFieldPasswordComponent
//                 theme={theme}
//                 variant="standard"
//                 type={values.showPassword ? 'text' : 'password'}
//                 onChange={handleChange('password')}
//                 error={args.value === ''}
//                 helperText={args.value === '' ? 'Empty field!' : ' '}
//                 InputProps={{
//                     endAdornment: (
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                             >
//                                 {values.showPassword ? (
//                                     <VisibilityOff />
//                                 ) : (
//                                     <Visibility />
//                                 )}
//                             </IconButton>
//                         </InputAdornment>
//                     ),
//                 }}
//                 {...args}
//             />
//         </>
//     )
// }

ComponentTextField.propTypes = {
    onClick: PropTypes.func,
}
ComponentTextFieldPassword.propTypes = {
    onClick: PropTypes.func,
}
ComponentTextFieldDisabled.propTypes = {
    onClick: PropTypes.func,
}
