'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWithEmoji = exports.parseEmoji = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parse = require('./parse');

Object.defineProperty(exports, 'parseEmoji', {
  enumerable: true,
  get: function get() {
    return _parse.parseEmoji;
  }
});

var _ContentWithEmoji = require('./ContentWithEmoji');

Object.defineProperty(exports, 'ContentWithEmoji', {
  enumerable: true,
  get: function get() {
    return _ContentWithEmoji.ContentWithEmoji;
  }
});
exports.Emoji = Emoji;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmojiItem = require('./EmojiItem');

var _EmojiItem2 = _interopRequireDefault(_EmojiItem);

var _emojis = require('./emojis');

var _emojis2 = _interopRequireDefault(_emojis);

require('./assets/emoji.css');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiInitialState = { recentUsed: [] };

function emojiReducer(prevState, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    /**
     * 最近使用的表情
     *  */
    case 'addRecentUsed':
      {
        return _extends({}, prevState, {
          recentUsed: payload.recentUsed
        });
      }
    default:
      return prevState;
  }
}

function Emoji(props) {
  var initStates = Array.isArray(props.recentUsed) ? _extends({}, emojiInitialState, { recentUsed: props.recentUsed }) : emojiInitialState;

  var _useReducer = (0, _react.useReducer)(emojiReducer, initStates),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var handleClick = function handleClick(payload) {
    var recentUsed = undefined;
    if (Array.isArray(props.recentUsed)) {
      recentUsed = JSON.parse(JSON.stringify(state.recentUsed));
      recentUsed.unshift(payload);
      var foundIndex = recentUsed.findIndex(function (item, order) {
        return order && item.id === payload.id;
      });
      if (foundIndex !== -1) {
        recentUsed.splice(foundIndex, 1);
      } else if (recentUsed.length > _constants.perLine) {
        recentUsed.pop();
      }
      dispatch({ type: 'addRecentUsed', payload: { recentUsed: recentUsed } });
    }
    if (props.insertEmoji) {
      props.insertEmoji(payload.cn, recentUsed);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: { height: props.height + 'px' }, className: 'wemoji-area' },
    _react2.default.createElement(
      'div',
      { className: 'wemoji-list' },
      state.recentUsed.length && Array.isArray(props.recentUsed) && _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'wemoji-head' },
          '\u6700\u8FD1\u4F7F\u7528'
        ),
        state.recentUsed.map(function (item, index) {
          return _react2.default.createElement(_EmojiItem2.default, {
            key: item.id,
            index: index,
            backgroundImage: props.source || _constants.EMOJI_SOURCE,
            item: item,
            onClick: handleClick
          });
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'wemoji-head' },
        '\u6240\u6709\u8868\u60C5'
      ),
      _emojis2.default.map(function (item, index) {
        return _react2.default.createElement(_EmojiItem2.default, {
          key: item.id,
          index: index,
          backgroundImage: props.source || _constants.EMOJI_SOURCE,
          item: item,
          onClick: handleClick
        });
      }),
      _react2.default.createElement('div', { className: 'wemoji-item' })
    )
  );
}