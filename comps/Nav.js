'use strict';

import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  color: 'maroon',
  textTransform: 'uppercase',
  textDecoration: 'none'
};

const Nav = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Nav
