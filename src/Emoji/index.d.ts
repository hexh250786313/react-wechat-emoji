import React from "react";
import { textType } from "./parse";

const emoji = {
  id: 0,
  cn: "[微笑]",
  hk: "[微笑]",
  us: "[Smile]",
  code: "/::)",
  web_code: "/微笑",
  style: "smiley_0",
};

type EmojiProps = {
  /**
   * 高度
   */
  height?: number;
  /**
   * 点击表情的回调，参数一是点击的 emoji text，参数二是最近使用表情（如果有开启最近使用功能的话）
   */
  insertEmoji?: (emojiText: string, recentUsed?: Array<typeof emoji>) => void;
  /**
   * Emoji 雪碧图地址，强烈建议使用自己的 CDN 地址，默认是 bilibili 图床地址，稳定性未知
   */
  source?: string;
  /**
   * 最近使用表情，参数仅用作初始化，无初始值传空数组；想关闭此功能则不传此参数
   */
  recentUsed?: Array<typeof emoji>;
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
  content?: string | EmojiContentType[];
  /**
   * 外层样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 文本样式
   */
  textStyle?: React.CSSProperties;
  /**
   * 表情的显示大小，默认 0.5
   */
  emojiScale?: number;
  /**
   * Emoji 雪碧图地址
   */
  source?: string;
};

export function parseEmoji(content: string): EmojiContentType[];
export const ContentWithEmoji: React.FC<ContentWithEmojiProps>;
export const Emoji: React.FC<EmojiProps>;
