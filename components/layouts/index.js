import Navbar from "../navbar";
import Loading from '../../components/Loading'
import Head from 'next/head'
import Footer from '../../components/Footer'
import ShareButton from '../../components/ShareButtons'


export default function Layout({ children }) {
  return (
    <div>
        <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/head_icon.jpg" />
      </Head>
        <Loading />
        <Navbar />
        {children}
        <ShareButton />
        <Footer />
    </div>
  );
}
