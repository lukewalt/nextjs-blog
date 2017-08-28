'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/post.js?entry';


// every page will get a prop called url with related details
// in this case a query obj with query string params
var Content = function Content(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.url.query.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'This is the blog post content.'));
};

// url prop is only exposed to the page's main component [exp def].
// if you need, you can pass it into the tag

exports.default = function (props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(Content, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};