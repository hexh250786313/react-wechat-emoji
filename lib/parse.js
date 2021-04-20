'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEmoji = exports.textType = undefined;

var _emojis = require('./emojis');

var _emojis2 = _interopRequireDefault(_emojis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textType = exports.textType = {
  normal: 1,
  emoji: 2
};

var emotionMap = {};
_emojis2.default.forEach(function (item) {
  if (item.cn) emotionMap[item.cn] = item;
});

var parseEmoji = exports.parseEmoji = function parseEmoji(content) {
  var emojiIndexList = [];
  for (var k in emotionMap) {
    var idx = content.indexOf(k);
    while (idx >= 0) {
      emojiIndexList.push({ idx: idx, code: k, type: textType.emoji });
      idx = content.indexOf(k, idx + k.length);
    }
  }

  emojiIndexList = emojiIndexList.sort(function (a, b) {
    return a.idx - b.idx;
  });
  var newContentList = [];
  var lastTextIndex = 0;

  emojiIndexList.forEach(function (item) {
    if (lastTextIndex !== item.idx) {
      newContentList.push({
        type: textType.normal,
        content: content.substring(lastTextIndex, item.idx),
        imageClass: ''
      });
    }
    if (item.type === textType.emoji) {
      newContentList.push({
        type: item.type,
        content: content.substr(item.idx, item.code.length),
        imageClass: emotionMap[item.code].style
      });
    }
    lastTextIndex = item.idx + item.code.length;
  });
  var lastText = content.substring(lastTextIndex);
  if (lastText) {
    newContentList.push({
      type: textType.normal,
      content: lastText,
      imageClass: ''
    });
  }
  return newContentList;
};