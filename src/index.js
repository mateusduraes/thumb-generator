import { createCanvas, fillCanvas, insertText, getCanvasBase64 } from './canvas'

export default function getPicture({
  width = 200,
  height = 200,
  color,
  text,
}) {
  try {
    const canvas = createCanvas({width, height})
    fillCanvas(canvas, color)
    insertText(text)
    return getCanvasBase64(canvas)
  } catch (e) {
    console.error('Error')    
  }
}