import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preconnect to the fonts.gstatic.com domain */}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        {/* Load the Google Fonts asynchronously */}
        <link
          rel="stylesheet"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Be+Vietnam+Pro%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
        />
      </Head>
      <body>
        <Header/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
