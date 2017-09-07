'use strict';

import Layout from '../comps/Layout';
import Head from '../comps/Head'
import fetch from 'isomorphic-unfetch';

// every page will get a prop called url with related details
// in this case a query obj with query string params
const Post = (props) => (
  <div>
    <Head />
    <div className="cont">
      <h1>{props.show.name}</h1>
      <div className="info">
        <img src={props.show.image.medium} />
        <div className="summary">
          <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
          <p>Premiered: { props.show.premiered}</p>
          {props.show.genres.map( genre => (
            <p className="genre">{genre}</p>
          ))}
        </div>


      </div>
    </div>
    <style jsx>{`
      img {
        height: 300px;
        width: auto;
        border-radius: 3px;
      }
      .cont {
        padding: 50px;

      }
      .info {
        display: flex;

      }
      .info {
        padding: 10px 70px;
      }
      .summary {

      }
      .genre {
        display: flex;
        flex-wrap: wrap;
      }

    `}</style>
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
