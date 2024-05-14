import { createGlobalStyle, ThemeProvider } from 'styled-components'

import {
    MenuList,
    MenuListItem,
    ProgressBar,
    Separator,
    styleReset,
} from 'react95'
// pick a theme of your choice
import original from 'react95/dist/themes/original'
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'
import { useState, useEffect } from 'react'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`

export const Windows95Provider = ({ children }) => (
    <div>
        <GlobalStyles />
        <ThemeProvider theme={original}>{children}</ThemeProvider>
    </div>
)

export function ProgressBarIncrementing() {
    const [percent, setPercent] = useState(3)

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((previousPercent) => {
                if (previousPercent === 100) {
                    // return 0
                }
                const diff = Math.random() * 24
                return Math.min(previousPercent + diff, 100)
            })
        }, 500)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <ProgressBar value={Math.floor(percent)} />
}
