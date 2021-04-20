import React from 'react'
import './assets/position.css'
import { textType, parseEmoji } from './parse'

const EMOJI_SOURCE =
  'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png'

export const ContentWithEmoji = ({
  content,
  bodyStyle = {},
  textStyle = {},
  emojiScale = 0.5
}) => {
  if (!Array.isArray(content)) {
    content = parseEmoji(content)
  }
  return (
    <div
      style={{
        ...bodyStyle,
        display: 'inline-block',
        wordBreak: 'break-all',
        whiteSpace: 'pre-wrap'
      }}
    >
      {content.map((item, index) => {
        if (item.type === textType.normal) {
          return (
            <div key={index} style={{ display: 'inline-block', ...textStyle }}>
              {item.content}
            </div>
          )
        }
        return (
          <div
            style={{
              height: `${64 * emojiScale}px`,
              width: `${64 * emojiScale}px`,
              display: 'inline-block',
              verticalAlign: 'text-bottom'
            }}
            key={index}
          >
            <div
              style={{
                transformOrigin: '0px 0px',
                transform: `scale(${emojiScale})`,
                backgroundImage: `url(${EMOJI_SOURCE})`
              }}
              className={item.imageClass}
            />
          </div>
        )
      })}
    </div>
  )
}
