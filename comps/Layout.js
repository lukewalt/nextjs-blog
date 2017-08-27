'use strict';

import Nav from './Nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Nav />
  </div>
)

export default Layout;
