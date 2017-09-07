'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/comps/Nav.js';


var Nav = function Nav() {
  return _react2.default.createElement('div', { style: navStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', { style: blogBanner, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'My Blog')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Profile')));
};

exports.default = Nav;


var blogBanner = {
  textAlign: 'center',
  fontFamily: 'Baloo Bhaijaan',
  textDecoration: 'none',
  textTransform: 'uppercase',
  margin: 0,
  color: '#444',
  fontSize: 50
};

var navStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20
};

var linkStyle = {
  color: '#1c9963',
  textTransform: 'uppercase',
  textDecoration: 'none'
};