'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout';
import Head from '../comps/Head';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <div>
    <Layout>
      <div style={showsGrid}>
        {props.shows.map(({ show }) => (
          <div key={show.id} style={postStyle}>
            <img src={show.image.medium} />

            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a style={link}>{show.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
  const data = await res.json();

  console.log(JSON.parse(JSON.stringify(data[0])));

  return {
    shows: data
  }

}

export default Index


// styles
const showsGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

const postStyle = {
  width: 200,
  height: 350,
  margin: 10,
  border: '1px solid #DDD',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textAlign: 'center'
}

const link = {
    color: '#1c9963',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: 5,
}
