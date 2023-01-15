import '../styles/globals.css'
import '../navbar.css'
import '../styles/home.css'
import '../styles/share.css'
import '../styles/skills.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
