import type { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'

import '@/styles/globals.css'

const outfit = Outfit({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
    </div>
  )
}
