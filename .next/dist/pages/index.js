'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Head = require('../comps/Head');

var _Head2 = _interopRequireDefault(_Head);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { style: showsGrid, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement('div', { key: show.id, style: postStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, _react2.default.createElement('img', { src: show.image.medium, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }), _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement('a', { style: link, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, show.name)));
  }))));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log(JSON.parse((0, _stringify2.default)(data[0])));

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;

// styles

var showsGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

var postStyle = {
  width: 200,
  height: 350,
  margin: 10,
  border: '1px solid #DDD',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textAlign: 'center'
};

var link = {
  color: '#1c9963',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: 5
};