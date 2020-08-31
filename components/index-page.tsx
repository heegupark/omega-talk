import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>o-block</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Sort blocks!" />
        <meta name="description" content="Sort blocks!" />
        <meta property="og:title" content="o-block" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://block.heegu.net/" />
        <meta property="og:image" content="../static/images/block-ss-001.gif" />
        <meta property="og:description" content="Sort blocks!" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/png" href="../static/images/o-logo.png" />
      </Head>
    </>
  );
}
