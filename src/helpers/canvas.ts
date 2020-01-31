import { getRandomColor, getContrastColor } from './color-utils';

export const createCanvas = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export const fillCanvas = (
  canvas: HTMLCanvasElement,
  color = getRandomColor()
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw { error: 'Unable to get canvas context' };
  }
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const insertText = (canvas: HTMLCanvasElement, letter: string) => {
  const center = canvas.width / 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw { error: 'Unable to get canvas context' };
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = getContrastColor(ctx.fillStyle as string);
  ctx.font = `${center}px Arial bold`;
  ctx.fillText(letter, center, center);
};

export const getCanvasBase64 = (canvas: HTMLCanvasElement): string =>
  canvas.toDataURL();
