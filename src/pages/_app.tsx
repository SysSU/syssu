import Head from 'next/head';
import '../globals.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '../components/layouts/default';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Head>
        <title>Vernon (Seldon) Stone&apos;s Profile Page</title>
        <meta
          name="description"
          content="Vernon (Seldon) Stone's Profile Page"
        />
        <meta
          name="keywords"
          content="Vernon Stone, Seldon Stone, Vernon Seldon Stone, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page, Vernon Seldon Stone Profile Page, Vernon Seldon Stone Profile, Vernon Seldon Stone Page"
        />
        <meta name="author" content="Vernon (Seldon) Stone" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
