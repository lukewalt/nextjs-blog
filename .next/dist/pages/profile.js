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

var _jsxFileName = '/Users/LukeWoodward/workspace/backend/next-blog/pages/profile.js?entry';


var Profile = function Profile(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'usePage', 'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'userBanner', 'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('img', { className: 'userImg', src: props.user.picture.large, 'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('h1', {
    'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.user.name.first + ' ' + props.user.name.last), _react2.default.createElement('p', {
    'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.user.email), _react2.default.createElement('p', {
    'data-jsx': 3850923634,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.user.location.city + ', ' + props.user.location.state)))), _react2.default.createElement(_style2.default, {
    styleId: 3850923634,
    css: '.usePage[data-jsx="3850923634"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.userImg[data-jsx="3850923634"]{border-radius:50%;height:100px;border:10px solid rgba(28,153,99,0.27)}.userBanner[data-jsx="3850923634"]{color:#1c9963;text-align:center}.userBanner[data-jsx="3850923634"]:nth-last-child(1){text-transform:capitalize}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdzQixBQUtLLEFBS0osQUFJWSxjQUhSLElBTEwsUUFTZixLQVI0QyxDQUs1QyxzQ0FKQSxJQVB5QixtR0FDSiw2RkFDckIiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTHVrZVdvb2R3YXJkL3dvcmtzcGFjZS9iYWNrZW5kL25leHQtYmxvZyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcHMvSGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQcm9maWxlID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlUGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyQmFubmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlckltZ1wiIHNyYz17cHJvcHMudXNlci5waWN0dXJlLmxhcmdlfSAvPlxuICAgICAgICA8aDE+e2Ake3Byb3BzLnVzZXIubmFtZS5maXJzdH0gJHtwcm9wcy51c2VyLm5hbWUubGFzdH1gfTwvaDE+XG4gICAgICAgIDxwPntwcm9wcy51c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+e2Ake3Byb3BzLnVzZXIubG9jYXRpb24uY2l0eX0sICR7cHJvcHMudXNlci5sb2NhdGlvbi5zdGF0ZX1gfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC51c2VQYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAudXNlckltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjgsIDE1MywgOTksIDAuMjcpO1xuICAgICAgfVxuICAgICAgLnVzZXJCYW5uZXIge1xuICAgICAgICBjb2xvcjogIzFjOTk2MztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnVzZXJCYW5uZXI6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbi8vdGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoZSBmdW5jdGlvbiBpbiB0aGUgY29udGV4dCBvYmplY3QuIEl0IGhhcyBhIHF1ZXJ5IGZpZWxkIHRoYXQgd2UgY2FuIHVzZSB0byBmZXRjaCBpbmZvcm1hdGlvblxuUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihwcm9wcykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9gKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHVzZXIucmVzdWx0c1swXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyOiB1c2VyLnJlc3VsdHNbMF1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG5cbi8vXG4vLyA8cD57cHJvcHMuZW1haWx9PC9wPlxuXG4vLyA8aW1nIHNyYz17fT5cbiJdfQ== */\n/*@ sourceURL=pages/profile.js?entry */'
  }));
};

//the first argument of the function in the context object. It has a query field that we can use to fetch information
Profile.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var res, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('https://randomuser.me/api/');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            user = _context.sent;

            console.log(user.results[0]);

            return _context.abrupt('return', {
              user: user.results[0]
            });

          case 8:
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

exports.default = Profile;

//
// <p>{props.email}</p>

// <img src={}>