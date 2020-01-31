import { ContrastColor } from 'typings';

export function getContrastColor(hex: string): ContrastColor {
  const hexToR = (h: string) => parseInt(cutHex(h).substring(0, 2), 16);
  const hexToG = (h: string) => parseInt(cutHex(h).substring(2, 4), 16);
  const hexToB = (h: string) => parseInt(cutHex(h).substring(4, 6), 16);
  const cutHex = (h: string) => (h.charAt(0) == '#' ? h.substring(1, 7) : h);

  const threshold = 130;
  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  return cBrightness > threshold ? '#000000' : '#ffffff';
}

export function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
