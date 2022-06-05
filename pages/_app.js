import Footer from '../components/footer'
import Header from '../components/header'
import Menu from '../components/menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Menu />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
