'use strict';

import Link from 'next/link';


const Nav = () => (
  <div style={navStyle}>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/">
      <a style={blogBanner}>My Blog</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} >Profile</a>
    </Link>
  </div>
)

export default Nav


const blogBanner = {
  textAlign: 'center',
  fontFamily: 'Baloo Bhaijaan',
  textDecoration: 'none',
  textTransform: 'uppercase',
  margin: 0,
  color: '#444',
  fontSize: 50
}

const navStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
}


const linkStyle = {
  color: '#1c9963',
  textTransform: 'uppercase',
  textDecoration: 'none'
};
