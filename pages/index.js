'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout'


const PostLink = (props) => (
  <li style={postStyle}>
    <Link href={`/post?title=${props.title}`}>
      <a style={{textDecoration: 'none'}}>{props.title}</a>
    </Link>
  </li>
)


export default () => (
  <Layout>
    <h1 style={blogBanner} >My Blog</h1>
    <ul style={{listStyle: 'none', padding: 0}}>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is great" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)

// styles
const postStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const blogBanner = {
  textAlign: 'center'
}
