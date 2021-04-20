import React from "react";
import { textType } from "./parse";

type EmojiProps = {
  /**
   * 高度
   */
  height?: number;
  /**
   * 点击表情的回调
   */
  insertEmoji?: Function;
};

type EmojiContentType = {
  type: typeof textType.normal | typeof textType.emoji;
  content: string;
  imageClass: string;
};

type ContentWithEmojiProps = {
  /**
   * 内容
   */
  content: string | EmojiContentType[];
  /**
   * 外层样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 文本样式
   */
  textStyle?: React.CSSProperties;
  /**
   * 表情的显示大小
   */
  emojiScale?: number;
};

const Emoji: React.FC<EmojiProps>;

export function parseEmoji(content: string): EmojiContentType[];
export const ContentWithEmoji: React.FC<ContentWithEmojiProps>;
export default Emoji;
