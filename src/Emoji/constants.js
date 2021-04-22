const EMOJI_SIZE = 40
const padding = 15
const areaWidth = window.innerWidth
export const EMOJI_SOURCE =
  'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/28ff7eab6bb10c9039509d2c8e52a7416174582c.png'
export const perLine = Math.floor((areaWidth - padding * 2) / 45)
export const extraPadding = Math.floor(
  (areaWidth - padding * 2 - perLine * EMOJI_SIZE) / (perLine - 1)
)
