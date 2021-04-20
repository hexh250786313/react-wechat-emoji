import React, { useReducer } from 'react'
import EmojiItem from './EmojiItem'
import emojis from './emojis'
import './emoji.css'

const EMOJI_SOURCE =
  'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png'
const padding = 15
const areaWidth = window.innerWidth
const perLine = Math.floor((areaWidth - padding * 2) / 45)

const emojiInitialState = { recentUsed: [] }

export { parseEmoji } from './parse'
export { ContentWithEmoji } from './ContentWithEmoji'

function emojiReducer (prevState, action) {
  switch (action.type) {
    /**
     * 最近使用的表情
     *  */
    case 'addRecentUsed': {
      prevState.recentUsed.unshift(action.payload)
      const foundIndex = prevState.recentUsed.findIndex(
        (item, order) => order && item.id === action.payload.id
      )
      if (foundIndex !== -1) {
        prevState.recentUsed.splice(foundIndex, 1)
      } else if (prevState.recentUsed.length > perLine) {
        prevState.recentUsed.pop()
      }
      return {
        ...prevState,
        recentUsed: prevState.recentUsed
      }
    }
    default:
      return prevState
  }
}

function Emoji (props) {
  const [state, dispatch] = useReducer(emojiReducer, emojiInitialState)

  const handleClick = (payload) => {
    dispatch({ type: 'addRecentUsed', payload })
    if (props.insertEmoji) {
      props.insertEmoji(payload.cn)
    }
  }

  return (
    <div style={{ height: `${props.height}px` }} className='area'>
      <div className='list'>
        {state.recentUsed.length && (
          <>
            <div className='head'>最近使用</div>
            {state.recentUsed.map((item, index) => (
              <EmojiItem
                key={item.id}
                index={index}
                backgroundImage={EMOJI_SOURCE}
                item={item}
                onClick={handleClick}
              />
            ))}
          </>
        )}
        <div className='head'>所有表情</div>
        {emojis.map((item, index) => (
          <EmojiItem
            key={item.id}
            index={index}
            backgroundImage={EMOJI_SOURCE}
            item={item}
            onClick={handleClick}
          />
        ))}
        <div className='item' />
      </div>
    </div>
  )
}

export default Emoji
