import React from 'react'
import './emoji.css'
import './position.css'

const EMOJI_SIZE = 40
const padding = 15
const areaWidth = window.innerWidth
const perLine = Math.floor((areaWidth - padding * 2) / 45)
const extraPadding = Math.floor(
  (areaWidth - padding * 2 - perLine * EMOJI_SIZE) / (perLine - 1)
)

const EmojiItem = (props) => {
  const { backgroundImage = '', index = 0, item, onClick = () => {} } = props
  return (
    <div
      onClick={() => onClick(item)}
      style={{
        paddingRight: (index + 1) % perLine ? `${extraPadding}px` : '0px'
      }}
      className='item'
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className={`item__icon ${item.style}`}
      />
    </div>
  )
}

export default EmojiItem
