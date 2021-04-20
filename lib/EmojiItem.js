'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./assets/emoji.css');

require('./assets/position.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMOJI_SIZE = 40;
var padding = 15;
var areaWidth = window.innerWidth;
var perLine = Math.floor((areaWidth - padding * 2) / 45);
var extraPadding = Math.floor((areaWidth - padding * 2 - perLine * EMOJI_SIZE) / (perLine - 1));

var EmojiItem = function EmojiItem(props) {
  var _props$backgroundImag = props.backgroundImage,
      backgroundImage = _props$backgroundImag === undefined ? '' : _props$backgroundImag,
      _props$index = props.index,
      index = _props$index === undefined ? 0 : _props$index,
      item = props.item,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === undefined ? function () {} : _props$onClick;

  return _react2.default.createElement(
    'div',
    {
      onClick: function onClick() {
        return _onClick(item);
      },
      style: {
        paddingRight: (index + 1) % perLine ? extraPadding + 'px' : '0px'
      },
      className: 'item'
    },
    _react2.default.createElement('div', {
      style: {
        backgroundImage: 'url(' + backgroundImage + ')'
      },
      className: 'item__icon ' + item.style
    })
  );
};

exports.default = EmojiItem;