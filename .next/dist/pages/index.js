'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/index.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', { style: postStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { style: { textDecoration: 'none' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.title)));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('h1', { style: blogBanner, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'My Blog'), _react2.default.createElement('ul', { style: { listStyle: 'none', padding: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is great', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

// styles


var postStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var blogBanner = {
  textAlign: 'center'
};