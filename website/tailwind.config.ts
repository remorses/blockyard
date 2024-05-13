import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import { nextui } from '@nextui-org/react'
import colors from 'tailwindcss/colors'

let gray = {
    50: colors.neutral['50'],
    100: colors.neutral['100'],
    200: colors.neutral['200'],
    300: colors.neutral['300'],
    400: colors.neutral['400'],
    500: colors.neutral['500'],
    600: '#42474D',
    700: '#36393F',
    800: '#2F3136',
    // 850: '#212225',
    // 900: '#171717',
    900: '#171717',
    850: '#212225',
}

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,.md}', //
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gray,
            },
            typography: {
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': {
                            content: 'none',
                        },
                        'blockquote p:first-of-type::after': {
                            content: 'none',
                        },
                    },
                },
            },
        },
    },
    plugins: [typography, nextui({ addCommonColors: true })],
} satisfies Config
