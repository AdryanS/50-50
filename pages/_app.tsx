import type { AppProps } from 'next/app'

import '../src/globalStyled'
import '../src/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp