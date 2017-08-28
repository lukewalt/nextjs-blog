'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <Layout>
    <h1 style={blogBanner}>My Blog</h1>
    <ul style={{listStyle: 'none', padding: 0}}>
      {props.shows.map(({ show }) => (
        <li key={show.id} style={postStyle} >
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a style={{textDecoration: 'none'}}>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
  const data = await res.json();

  console.log(`Data fetched. COUNT: ${data.length}`);

  return {
    shows: data
  }

}

export default Index

// styles
const postStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const blogBanner = {
  textAlign: 'center'
}
