'use strict';

import Layout from '../comps/Layout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';


// every page will get a prop called url with related details
// in this case a query obj with query string params
const Post = (props) => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </div>
)

//the first argument of the function in the context object. It has a query field that we can use to fetch information
Post.getInitialProps = async function(props) {
  const { id } = props.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show : ${show.name}`);

  return { show }
}

export default Post
