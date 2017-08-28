'use strict';

import Nav from './Nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (

  <div>
    <Nav />
    <div style={layoutStyle}>
      {props.children}
    </div>
  </div>
)

export default Layout;
