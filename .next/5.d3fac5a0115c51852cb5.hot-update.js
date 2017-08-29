webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(110);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(111);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(572);

var _Layout2 = _interopRequireDefault(_Layout);

var _isomorphicUnfetch = __webpack_require__(574);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Head = __webpack_require__(603);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement('li', { key: show.id, style: postStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
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

          console.log('Data fetched. COUNT: ' + data);

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

var postStyle = {
  width: 200,
  height: 200,
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/LukeWoodward/workspace/backend/next-blog/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/LukeWoodward/workspace/backend/next-blog/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kM2ZhYzVhMDExNWM1MTg1MmNiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZGVlOTJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBzL0hlYWQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPExheW91dD5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLnNob3dzLm1hcCgoeyBzaG93IH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfSBzdHlsZT17cG9zdFN0eWxlfT5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgIDwvTGF5b3V0PlxuICA8L2Rpdj5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbmApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgRGF0YSBmZXRjaGVkLiBDT1VOVDogJHtkYXRhfWApO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGFcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbi8vIHN0eWxlc1xuY29uc3QgcG9zdFN0eWxlID0ge1xuICB3aWR0aDogMjAwLFxuICBoZWlnaHQ6IDIwMCxcbiAgbWFyZ2luOiAxMCxcbiAgcGFkZGluZzogMTAsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFMQTtBQUNBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==