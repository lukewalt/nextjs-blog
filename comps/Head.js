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
      }
      ul {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        color: '#1c9963',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }
      a:hover {
        opacity: 0.6;
      }

    `}</style>
  </div>

)
