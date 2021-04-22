'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EMOJI_SIZE = 40;
var padding = 15;
var areaWidth = window.innerWidth;
var EMOJI_SOURCE = exports.EMOJI_SOURCE = 'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png';
var perLine = exports.perLine = Math.floor((areaWidth - padding * 2) / 45);
var extraPadding = exports.extraPadding = Math.floor((areaWidth - padding * 2 - perLine * EMOJI_SIZE) / (perLine - 1));