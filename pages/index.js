'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout'


const PostLink = (props) => (
  <li style={postStyle}>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a style={{textDecoration: 'none'}}>{props.title}</a>
    </Link>
  </li>
)


export default () => (
  <Layout>
    <h1 style={blogBanner} >My Blog</h1>
    <ul style={{listStyle: 'none', padding: 0}}>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is great" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
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
