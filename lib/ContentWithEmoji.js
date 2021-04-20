'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWithEmoji = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('./assets/position.css');

var _parse = require('./parse');

var EMOJI_SOURCE = 'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png';

var ContentWithEmoji = exports.ContentWithEmoji = function ContentWithEmoji(_ref) {
  var content = _ref.content,
      _ref$bodyStyle = _ref.bodyStyle,
      bodyStyle = _ref$bodyStyle === undefined ? {} : _ref$bodyStyle,
      _ref$textStyle = _ref.textStyle,
      textStyle = _ref$textStyle === undefined ? {} : _ref$textStyle,
      _ref$emojiScale = _ref.emojiScale,
      emojiScale = _ref$emojiScale === undefined ? 0.5 : _ref$emojiScale;

  if (!Array.isArray(content)) {
    content = (0, _parse.parseEmoji)(content);
  }
  return React.createElement(
    'div',
    {
      style: _extends({}, bodyStyle, {
        display: 'inline-block',
        wordBreak: 'break-all',
        whiteSpace: 'pre-wrap'
      })
    },
    content.map(function (item, index) {
      if (item.type === _parse.textType.normal) {
        return React.createElement(
          'div',
          { key: index, style: _extends({ display: 'inline-block' }, textStyle) },
          item.content
        );
      }
      return React.createElement(
        'div',
        {
          style: {
            height: 64 * emojiScale + 'px',
            width: 64 * emojiScale + 'px',
            display: 'inline-block',
            verticalAlign: 'text-bottom'
          },
          key: index
        },
        React.createElement('div', {
          style: {
            transformOrigin: '0px 0px',
            transform: 'scale(' + emojiScale + ')',
            backgroundImage: 'url(' + EMOJI_SOURCE + ')'
          },
          className: item.imageClass
        })
      );
    })
  );
};