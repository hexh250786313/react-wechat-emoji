'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWithEmoji = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./assets/position.css');

require('./assets/emoji.css');

var _parse = require('./parse');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentWithEmoji = exports.ContentWithEmoji = function ContentWithEmoji(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === undefined ? '' : _ref$content,
      _ref$bodyStyle = _ref.bodyStyle,
      bodyStyle = _ref$bodyStyle === undefined ? {} : _ref$bodyStyle,
      _ref$textStyle = _ref.textStyle,
      textStyle = _ref$textStyle === undefined ? {} : _ref$textStyle,
      _ref$emojiScale = _ref.emojiScale,
      emojiScale = _ref$emojiScale === undefined ? 0.5 : _ref$emojiScale,
      source = _ref.source;

  if (!Array.isArray(content)) {
    content = (0, _parse.parseEmoji)(content);
  }
  return _react2.default.createElement(
    'div',
    { className: 'wemoji-content', style: bodyStyle },
    content.map(function (item, index) {
      if (item.type === _parse.textType.normal) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'wemoji-content__text', style: textStyle },
          item.content
        );
      }
      return _react2.default.createElement(
        'div',
        {
          style: {
            height: 64 * emojiScale + 'px',
            width: 64 * emojiScale + 'px'
          },
          className: 'wemoji-content__emoji',
          key: index
        },
        _react2.default.createElement('div', {
          style: {
            transformOrigin: '0px 0px',
            transform: 'scale(' + emojiScale + ')',
            backgroundImage: 'url(' + (source || _constants.EMOJI_SOURCE) + ')'
          },
          className: item.imageClass
        })
      );
    })
  );
};