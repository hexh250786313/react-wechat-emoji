import React from 'react'
import './assets/position.css'
import './assets/emoji.css'
import { textType, parseEmoji } from './parse'
import { EMOJI_SOURCE } from './constants'

export const ContentWithEmoji = ({
  content = '',
  bodyStyle = {},
  textStyle = {},
  emojiScale = 0.5,
  source
}) => {
  if (!Array.isArray(content)) {
    content = parseEmoji(content)
  }
  return (
    <div className='wemoji-content' style={bodyStyle}>
      {content.map((item, index) => {
        if (item.type === textType.normal) {
          return (
            <div key={index} className='wemoji-content__text' style={textStyle}>
              {item.content}
            </div>
          )
        }
        return (
          <div
            style={{
              height: `${64 * emojiScale}px`,
              width: `${64 * emojiScale}px`
            }}
            className='wemoji-content__emoji'
            key={index}
          >
            <div
              style={{
                transformOrigin: '0px 0px',
                transform: `scale(${emojiScale})`,
                backgroundImage: `url(${source || EMOJI_SOURCE})`
              }}
              className={item.imageClass}
            />
          </div>
        )
      })}
    </div>
  )
}
