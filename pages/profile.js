'use strict';

import Layout from '../comps/Layout';
import Head from '../comps/Head'
import fetch from 'isomorphic-unfetch';

const Profile = (props) => (
  <div>
    <Head />
    <Layout>
    <div className="usePage">
      <div className="userBanner">
        <img className="userImg" src={props.user.picture.large} />
        <h1>{`${props.user.name.first} ${props.user.name.last}`}</h1>
        <p>{props.user.email}</p>
        <p>{`${props.user.location.city}, ${props.user.location.state}`}</p>
      </div>
    </div>
    </Layout>
    <style jsx>{`
      .usePage {
        height: 100vh;
        background: linear-gradient(#1c9963, #37ad7a);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .userImg {
        border-radius: 50%;
        height: 75px;
      }
      .userBanner {
        color: white;
        text-align: center;
      }
      `}</style>
  </div>
)

//the first argument of the function in the context object. It has a query field that we can use to fetch information
Profile.getInitialProps = async function(props) {
  const res = await fetch(`https://randomuser.me/api/`);
  const user = await res.json();
  console.log(user.results[0]);

  return {
    user: user.results[0]
  }
}

export default Profile

//
// <p>{props.email}</p>

// <img src={}>
