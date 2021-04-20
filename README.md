# react-wechat-emoji

用 React.js 做的仿微信/小程序 Emoji 表情组件

## Install

```
yarn add react-wechat-emoji
```

## Dev

```
git clone https://github.com/hexh250786313/react-wechat-emoji.git
cd react-wechat-emoji
yarn
yarn start
```


## Usage

```jsx
import React, { useState } from "react";
import { Emoji, ContentWithEmoji } from "./Emoji";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      输入一些东西并点击下方表情窗口的任意表情：
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <Emoji
          height={150}
          insertEmoji={(emojiText) => setText(text + emojiText)}
        />
      </div>
      <p style={{ margin: "20px 0 0 0" }}>将会显示你的输入值和解析表情图片：</p>
      <div style={{ backgroundColor: "#eee", padding: 10 }}>
        <ContentWithEmoji emojiScale={0.5} content={text} />
      </div>
    </div>
  );
}

export default App;
```

## LICENSE

MIT
