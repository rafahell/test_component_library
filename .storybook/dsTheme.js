import { createTheme } from '@mui/material/styles'
import '@fontsource/lato'

export const ds = createTheme({
    border: {
        drawer: { radius: 10 },
    },

    shadows: {
        softShadow: { boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 12%)' },
        hardShadow: { boxShadow: '0px 2px 10px 0px rgb(0 0 0 / 25%)' },
        ...Array(20).fill('none'),
    },

    typography: {
        fontFamily: 'Lato',
        fontWeight: 700,
        fontStyle: 'normal',
        h1: {
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 4.2,
        },

        h2: {
            fontWeight: 700,
            fontSize: 26,
            lineHeight: 3.8,
        },

        h3: {
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 3.2,
        },

        h4: {
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 2.7,
        },

        h5: {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 2.4,
        },

        h6: {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 2.4,
        },

        subtitle1: {
            fontSize: 12,
        },

        subtitle2: {
            fontSize: 12,
        },

        body1: {
            fontWeight: 700,
            fontSize: 14,
            //lineHeight: 21,
        },

        body2: {
            fontSize: 12,
        },

        button: {
            fontWeight: 700,
            fontSize: 14,
            //lineHeight: 16.8,
        },

        caption: {
            fontWeight: 900,
            fontSize: 14,
            //lineHeight: 16.8,
        },

        overline: {
            fontSize: 12,
        },
    },

    color: {
        //neutral
        neutral_100: '#F4F4F4',
        neutral_200: '#EDF0F2',
        neutral_300: '#E4E4E4',
        neutral_400: '#C4C4C4',
        neutral_500: '#8F8F8F',
        neutral_600: '#686868',

        //primary
        primary_100: '#EBEEF0',
        primary_200: '#A4B2BB',
        primary_300: '#324B5B',
        primary_400: '#00263E',

        //secondary
        secondary_100: '#E5F5FF',
        secondary_200: '#C3EBFF',
        secondary_300: '#30457D',
        secondary_400: '#111368',

        //secondary
        secondary_100: '#E5F5FF',
        secondary_200: '#C3EBFF',
        secondary_300: '#097EB6',
        secondary_400: '#4244D4',

        //error
        error_100: '#FEF2F2',
        error_200: '#E7AEAE',
        error_300: '#B26464',
        error_400: '#C54C4C',

        //warning
        warning_100: '#FEF4E8',
        warning_200: '#FFE4C3',
        warning_300: '#FEF4E8',
        warning_400: '#F7931D',

        //shades
        shade_100: '#1C1D21',
        shade_0: '#FFFFFF',
    },

    button_css_props: {
        radius: '8px',
        height: '40px',
        margin: '12px 16px 20px 0px',
        none: 'none',

        //hover behaviour primary
        primary_hover_bg: '#324B5B',
        primary_disabled_bg: '#EBEEF0',
        primary_disabled_color: '#A4B2BB',

        //hover behaviour secondary
        secondary_hover_bg: '#097EB6',
        secondary_disabled_color: '#E5F5FF',
        secondary_disabled_bg: '#097EB6',

        //hover behaviour tertiary
        error_hover_bg: '#B26464',
        error_disabled_bg: '#FEF2F2',
        error_disabled_color: '#E7AEAE',

        //hover behaviour quartenary
        warning_hover_bg: '#FFC681',
        warning_disabled_bg: '#FEF4E8',
        warning_disabled_color: '#FFE4C3',

        size_variant: {
            height_small: '32px',
            padding_small: '10px 12px',
            height_medium: '40px',
            padding_medium: '12px 13px',
            height_large: '48px',
            padding_large: '12px 16px',
            min_width: '88px',
        },
    },

    chip_css_props: {
        radius: '80px',
        height: '40px',

        margin: '12px 16px 20px 0px',
        none: 'none',

        size_variant: {
            height_small: '32px',
            padding_small: '10px 12px',
            height_medium: '40px',
            padding_medium: '12px 13px',
            height_large: '48px',
            padding_large: '12px 16px',
            min_width: '88px',
        },
    },

    avatar_css_props: {
        size_variant: {
            height_small: '24px',
            font_small: '0.75rem',
            height_medium: '40px',
            font_medium: '1.1rem',
            height_large: '56px',
            font_large: '1.5rem',
        },
    },

    linearprogress_css_props: {
        size_variant: {
            height_small: '4px',
            radius_small: '3px',

            height_medium: '12px',
            radius_medium: '4px',
        },
    },
    palette: {
        outline: {
            resting_outline: '#ececf2',
            primary_light: '#5e81f4',
            secondary_light_a: '#40e1fa',
            secondary_light_b: '#7ce7ac',
            secondary_light_c: '#f4be5e',
            secondary_light_d: '#ff808b',
        },
        action: {
            disabledBackground: '#ebeef0',
            disabled: '#a5b2bb',
        },

        tggreen: '#005500',
        tgblue: '#000055',
    },
})
