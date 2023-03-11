import type { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'

import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material';

const outfit = Outfit({ subsets: ['latin'] })


const theme = createTheme({
  typography: {
    fontFamily: '',
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0987A0',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  }
});


export default function App({ Component, pageProps }: AppProps) {
  return (

    <div className={outfit.className}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>

  )
}
