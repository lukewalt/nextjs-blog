'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Head = require('../comps/Head');

var _Head2 = _interopRequireDefault(_Head);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/post.js?entry';


// every page will get a prop called url with related details
// in this case a query obj with query string params
var Post = function Post(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('div', { className: 'cont', 'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.show.name), _react2.default.createElement('div', { className: 'info', 'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('img', { src: props.show.image.medium, 'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('div', { className: 'summary', 'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('p', {
    'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('p', {
    'data-jsx': 3838582653,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Premiered: ', props.show.premiered), props.show.genres.map(function (genre) {
    return _react2.default.createElement('p', { className: 'genre', 'data-jsx': 3838582653,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, genre);
  })))), _react2.default.createElement(_style2.default, {
    styleId: 3838582653,
    css: 'img[data-jsx="3838582653"]{height:300px;width:auto;border-radius:3px}.cont[data-jsx="3838582653"]{padding:50px}.info[data-jsx="3838582653"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.info[data-jsx="3838582653"]{padding:10px 70px}.genre[data-jsx="3838582653"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJnQixBQUdzQixBQUtBLEFBSUEsQUFJSyxBQU1MLGFBbEJGLEFBTWIsS0FPQSxNQVpvQixrQkFDcEIsZ0NBUUEsQUFTaUIseURBQ2pCIiwiZmlsZSI6InBhZ2VzL3Bvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0x1a2VXb29kd2FyZC93b3Jrc3BhY2UvYmFja2VuZC9uZXh0LWJsb2ciLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBzL0hlYWQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gZXZlcnkgcGFnZSB3aWxsIGdldCBhIHByb3AgY2FsbGVkIHVybCB3aXRoIHJlbGF0ZWQgZGV0YWlsc1xuLy8gaW4gdGhpcyBjYXNlIGEgcXVlcnkgb2JqIHdpdGggcXVlcnkgc3RyaW5nIHBhcmFtc1xuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG4gICAgICAgICAgPHA+UHJlbWllcmVkOiB7IHByb3BzLnNob3cucHJlbWllcmVkfTwvcD5cbiAgICAgICAgICB7cHJvcHMuc2hvdy5nZW5yZXMubWFwKCBnZW5yZSA9PiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnZW5yZVwiPntnZW5yZX08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuY29udCB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG5cbiAgICAgIH1cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgfVxuICAgICAgLmluZm8ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDcwcHg7XG4gICAgICB9XG4gICAgICAuc3VtbWFyeSB7XG5cbiAgICAgIH1cbiAgICAgIC5nZW5yZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbi8vdGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoZSBmdW5jdGlvbiBpbiB0aGUgY29udGV4dCBvYmplY3QuIEl0IGhhcyBhIHF1ZXJ5IGZpZWxkIHRoYXQgd2UgY2FuIHVzZSB0byBmZXRjaCBpbmZvcm1hdGlvblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihwcm9wcykge1xuICBjb25zdCB7IGlkIH0gPSBwcm9wcy5xdWVyeTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdyA6ICR7c2hvdy5uYW1lfWApO1xuXG4gIHJldHVybiB7IHNob3cgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0= */\n/*@ sourceURL=pages/post.js?entry */'
  }));
};

//the first argument of the function in the context object. It has a query field that we can use to fetch information
Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = props.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show : ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;