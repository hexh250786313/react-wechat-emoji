import React, { useReducer } from 'react'
import EmojiItem from './EmojiItem'
import emojis from './emojis'
import './assets/emoji.css'
import { EMOJI_SOURCE, perLine } from './constants'

const emojiInitialState = { recentUsed: [] }

export { parseEmoji } from './parse'
export { ContentWithEmoji } from './ContentWithEmoji'

function emojiReducer (prevState, { type, payload }) {
  switch (type) {
    /**
     * 最近使用的表情
     *  */
    case 'addRecentUsed': {
      return {
        ...prevState,
        recentUsed: payload.recentUsed
      }
    }
    default:
      return prevState
  }
}

export function Emoji (props) {
  const initStates = Array.isArray(props.recentUsed)
    ? { ...emojiInitialState, recentUsed: props.recentUsed }
    : emojiInitialState
  const [state, dispatch] = useReducer(emojiReducer, initStates)

  const handleClick = (payload) => {
    let recentUsed = undefined;
    if (Array.isArray(props.recentUsed)) {
      recentUsed = JSON.parse(JSON.stringify(state.recentUsed))
      recentUsed.unshift(payload)
      const foundIndex = recentUsed.findIndex(
        (item, order) => order && item.id === payload.id
      )
      if (foundIndex !== -1) {
        recentUsed.splice(foundIndex, 1)
      } else if (recentUsed.length > perLine) {
        recentUsed.pop()
      }
      dispatch({ type: 'addRecentUsed', payload: { recentUsed } })
    }
    if (props.insertEmoji) {
      props.insertEmoji(payload.cn, recentUsed)
    }
  }

  return (
    <div style={{ height: `${props.height}px` }} className='wemoji-area'>
      <div className='wemoji-list'>
        {state.recentUsed.length && Array.isArray(props.recentUsed) && (
          <React.Fragment>
            <div className='wemoji-head'>最近使用</div>
            {state.recentUsed.map((item, index) => (
              <EmojiItem
                key={item.id}
                index={index}
                backgroundImage={props.source || EMOJI_SOURCE}
                item={item}
                onClick={handleClick}
              />
            ))}
          </React.Fragment>
        )}
        <div className='wemoji-head'>所有表情</div>
        {emojis.map((item, index) => (
          <EmojiItem
            key={item.id}
            index={index}
            backgroundImage={props.source || EMOJI_SOURCE}
            item={item}
            onClick={handleClick}
          />
        ))}
        <div className='wemoji-item' />
      </div>
    </div>
  )
}
