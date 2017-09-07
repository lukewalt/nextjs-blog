'use strict';

import Head from 'next/head';

export default () => (

  <div>
    <Head>
      <title>BLOG</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Source+Sans+Pro:600" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Source Sans Pro', sans-serif;
        color: #444;
        margin: 0;
      }
    `}</style>
  </div>

)
