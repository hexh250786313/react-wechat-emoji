import emojis from './emojis'

export const textType = {
  normal: 1,
  emoji: 2
}

const emotionMap = {}
emojis.forEach((item) => {
  if (item.cn) emotionMap[item.cn] = item
})

export const parseEmoji = (content) => {
  let emojiIndexList = []
  for (const k in emotionMap) {
    let idx = content.indexOf(k)
    while (idx >= 0) {
      emojiIndexList.push({ idx, code: k, type: textType.emoji })
      idx = content.indexOf(k, idx + k.length)
    }
  }

  emojiIndexList = emojiIndexList.sort((a, b) => {
    return a.idx - b.idx
  })
  const newContentList = []
  let lastTextIndex = 0

  emojiIndexList.forEach((item) => {
    if (lastTextIndex !== item.idx) {
      newContentList.push({
        type: textType.normal,
        content: content.substring(lastTextIndex, item.idx),
        imageClass: ''
      })
    }
    if (item.type === textType.emoji) {
      newContentList.push({
        type: item.type,
        content: content.substr(item.idx, item.code.length),
        imageClass: emotionMap[item.code].style
      })
    }
    lastTextIndex = item.idx + item.code.length
  })
  const lastText = content.substring(lastTextIndex)
  if (lastText) {
    newContentList.push({
      type: textType.normal,
      content: lastText,
      imageClass: ''
    })
  }
  return newContentList
}
