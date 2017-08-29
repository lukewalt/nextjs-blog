'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout';
import fetch from 'isomorphic-unfetch';
import Head from '../comps/Head';

const Index = (props) => (
  <div>
    <Head />
    <Layout>
      <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id} style={postStyle}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
  const data = await res.json();

  console.log(`Data fetched. COUNT: ${data}`);

  return {
    shows: data
  }

}

export default Index

// styles
const postStyle = {
  width: 200,
  height: 200,
  margin: 10,
  padding: 10,
  border: '1px solid #DDD',
}
