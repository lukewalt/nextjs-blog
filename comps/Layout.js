'use strict';

import Head from '../comps/Head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head />
    <div className="body">
      <Nav />
      <div>
        {props.children}
      </div>
      <Footer />
      <style jsx>{`

        .body {
          width: 100vw;
        }

      `}</style>
    </div>
  </div>

)

export default Layout;
