import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>o-talk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Talk with friendss!" />
        <meta name="description" content="Talk with friends!" />
        <meta property="og:title" content="o-talk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talk.heegu.net/" />
        <meta property="og:image" content="../static/images/talk-ss-001.gif" />
        <meta property="og:description" content="Talk with friends!" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="../static/images/o-logo.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
          crossOrigin="anonymous"
        />
      </Head>
    </>
  );
}
