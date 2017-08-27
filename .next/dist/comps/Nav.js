'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-exmpl/comps/Nav.js';


var linkStyle = {
  marginRight: 15,
  color: 'maroon',
  textTransform: 'uppercase',
  textDecoration: 'none'
};

var Nav = function Nav() {
  return _react2.default.createElement('div', { style: { textAlign: 'center' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'About')));
};

exports.default = Nav;