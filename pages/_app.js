//To apply universal layout we wrap the _app.js with layout.
//With this universal layout happens

import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}

export default MyApp
