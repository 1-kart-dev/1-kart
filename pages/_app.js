import '../styles/globals.scss'
import '../assets/css/bootstrap.min.css'
import "../assets/css/animate.css"
import "../assets/css/lineicons.css"
import "../assets/css/ud-styles.css"
import { AuthUserProvider } from '../lib/auth'

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp
