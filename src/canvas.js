import { getRandomColor, getContrastColor } from './color-utils';

export const createCanvas = ({width, height}) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export const fillCanvas = (canvas, color = getRandomColor()) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export const insertText = (canvas, letter) => {
  if (!letter) { return }
  const center = canvas.width / 2
  const ctx = canvas.getContext('2d')
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = getContrastColor(ctx.fillStyle)
  ctx.font = `${center}px sans-serif bold`
  ctx.fillText(letter, center, center)
}

export const getCanvasBase64 = (canvas) => canvas.toDataURL()
