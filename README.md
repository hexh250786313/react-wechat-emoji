# react-wechat-emoji

用 React.js 做的仿微信/小程序 Emoji 表情组件

![example](https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/517bd8f1d9267eaa90b294fa69ece081f1991979.png)

## Install

```
yarn add react-wechat-emoji
```

## Usage

```jsx
import React, { useState } from 'react'
import { Emoji, ContentWithEmoji, parseEmoji } from 'react-wechat-emoji'

function App () {
  const [text, setText] = useState('')

  const testText = '你好，世界[微笑]'
  const contents = parseEmoji(testText)
  console.log(contents)
  /** 打印结果：
   *   contents = [
   *     { type: 1, content: "你好，世界", imageClass: "" },
   *     { type: 2, content: "[微笑]", imageClass: "smiley_0" },
   *   ];
   *  */

  return (
    <div>
      输入一些东西并点击下方表情窗口的任意表情：
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <Emoji
          recentUsed={[
            {
              cn: '[鸡]',
              code: '',
              hk: '[小雞]',
              id: 214,
              style: 'e2_14',
              us: '[Chick]',
              web_code: ''
            }
          ]}
          source='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png'
          height={300}
          insertEmoji={(emojiText, recentUsed) => {
            setText(text + emojiText)
            console.log({ recentUsed })
          }}
        />
      </div>
      <p style={{ margin: '20px 0 0 0' }}>将会显示你的输入值和解析表情图片：</p>
      <div style={{ backgroundColor: '#eee', padding: 10 }}>
        <ContentWithEmoji
          source='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png'
          emojiScale={0.5}
          content={text}
        />
      </div>
    </div>
  )
}

export default App
```

## Components

### types

```ts
const textType = {
  normal: 1,
  emoji: 2
}

const emoji = {
  id: 0,
  cn: "[微笑]",
  hk: "[微笑]",
  us: "[Smile]",
  code: "/::)",
  web_code: "/微笑",
  style: "smiley_0",
};

type EmojiContentType = {
  type: typeof textType.normal | typeof textType.emoji;
  content: string;
  imageClass: string;
};
```

### Emoji props

|    prop     |      default      |                             type                             | description                                                  |
| :---------: | :---------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|   height    |       `300`       |                           `number`                           | Emoji 面板高度                                               |
| insertEmoji |       none        | `(emojiText: string, recentUsed?: Array<typeof emoji>) => void` | 点击表情的回调，参数一是点击的 emoji text，参数二是最近使用表情（如果有开启最近使用功能的话） |
|   source    | bilibili 图床地址 |                           `string`                           | Emoji 雪碧图地址，强烈建议使用自己的 CDN 地址，默认是 bilibili 图床地址，稳定性未知 |
| recentUsed  |       none        |                    `Array<typeof emoji>`                     | 最近使用表情，参数仅用作初始化，无初始值传空数组；想关闭此功能则不传此参数 |

### ContentWithEmoji props

|    prop    |      default      |                type                | description                                                  |
| :--------: | :---------------: | :--------------------------------: | ------------------------------------------------------------ |
|  content   |       none        | `string \| Array<EmojiContentType>` | 内容                                                         |
| bodyStyle  |       none        |       `React.CSSProperties`        | 外层样式                                                     |
| textStyle  |       none        |       `React.CSSProperties`        | 文本样式                                                     |
| emojiScale |       `0.5`       |              `number`              | 表情的显示大小                                               |
|   source   | bilibili 图床地址 |              `string`              | Emoji 雪碧图地址，强烈建议使用自己的 CDN 地址，默认是 bilibili 图床地址，稳定性未知 |

## Api

### parseEmoji

```ts
function parseEmoji(content: string): EmojiContentType[];
```

## Dev

```yarn
git clone https://github.com/hexh250786313/react-wechat-emoji.git
cd react-wechat-emoji
yarn && yarn start
```

## LICENSE

MIT
