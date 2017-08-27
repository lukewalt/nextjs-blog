'use strict';

import Link from 'next/link';
import Layout from '../comps/Layout'


const postLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is great" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
