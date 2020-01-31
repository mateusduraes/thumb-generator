import {
  createCanvas,
  fillCanvas,
  insertText,
  getCanvasBase64,
} from './helpers/canvas';
import { IThumbnailOptions } from 'typings';

export default function getPicture({
  width = 200,
  height = 200,
  color,
  text,
}: IThumbnailOptions): string {
  try {
    const canvas = createCanvas({ width, height });
    fillCanvas(canvas, color);
    insertText(canvas, text);
    return getCanvasBase64(canvas);
  } catch (e) {
    console.error('Error generating picture', e);
    throw new Error('Error generating picture');
  }
}
