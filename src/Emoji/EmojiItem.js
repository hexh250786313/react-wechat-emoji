import React from 'react'
import './assets/emoji.css'
import './assets/position.css'
import { perLine, extraPadding } from './constants'

const EmojiItem = (props) => {
  const { backgroundImage = '', index = 0, item, onClick = () => {} } = props
  return (
    <div
      onClick={() => onClick(item)}
      style={{
        paddingRight: (index + 1) % perLine ? `${extraPadding}px` : '0px'
      }}
      className='wemoji-item'
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className={`wemoji-item__icon ${item.style}`}
      />
    </div>
  )
}

export default EmojiItem
