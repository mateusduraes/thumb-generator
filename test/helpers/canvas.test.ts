import { createCanvas, fillCanvas } from '../../src/helpers/canvas';
import 'jest-canvas-mock';

describe('Canvas creation', () => {
  it('#createCanvas should return a canvas with the valid props', () => {
    const canvas = createCanvas({ width: 200, height: 200 });
    expect(canvas).toBeTruthy();
    const { width, height } = canvas;
    expect(width).toEqual(200);
    expect(height).toEqual(200);
  });
});

describe('Canvas Manipulation', () => {
  let canvas: HTMLCanvasElement;
  beforeEach(() => {
    canvas = createCanvas({ width: 200, height: 200 });
  });

  it('#fillCanvas should fill the color canvas with the provided color', () => {
    fillCanvas(canvas, '#444');
    const ctx = canvas.getContext('2d');
    expect(ctx?.fillStyle).toBe('#444');
  });
});
