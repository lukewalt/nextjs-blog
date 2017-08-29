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


var linkStyle = {
  color: '#1c9963',
  textTransform: 'uppercase',
  textDecoration: 'none'
};

var Nav = function Nav() {
  return _react2.default.createElement('div', { style: navStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { style: blogBanner, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'My Blog')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'About')));
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