import React, { useState } from 'react'
import { Emoji, ContentWithEmoji, parseEmoji } from './Emoji'

function App () {
  const [text, setText] = useState('')

  const testText = '你好，世界[微笑]'
  const contents = parseEmoji(testText)
  console.log(contents)
  /*
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
