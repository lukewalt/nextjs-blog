'use strict';

import Layout from '../comps/Layout';

// every page will get a prop called url with related details
// in this case a query obj with query string params
const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

// url prop is only exposed to the page's main component [exp def].
// if you need, you can pass it into the tag

export default (props) => (
  <Layout>
    <Content url={props.url}/>
  </Layout>
)
