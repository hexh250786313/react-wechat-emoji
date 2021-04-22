'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./assets/emoji.css');

require('./assets/position.css');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        paddingRight: (index + 1) % _constants.perLine ? _constants.extraPadding + 'px' : '0px'
      },
      className: 'wemoji-item'
    },
    _react2.default.createElement('div', {
      style: {
        backgroundImage: 'url(' + backgroundImage + ')'
      },
      className: 'wemoji-item__icon ' + item.style
    })
  );
};

exports.default = EmojiItem;