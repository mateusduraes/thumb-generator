import { getContrastColor } from '../../src/helpers/color-utils';

describe('Color Utils', () => {
  it('getContrastColor should find the right color', () => {
    const blackContrastColor = getContrastColor('#000000');
    const whiteContrastColor = getContrastColor('#ffffff');
    expect(blackContrastColor).toEqual('#ffffff');
    expect(whiteContrastColor).toEqual('#000000');
  });
});
