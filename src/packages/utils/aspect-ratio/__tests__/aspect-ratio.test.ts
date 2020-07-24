import styled from 'styled-components';
import { aspectRatio, aspectPaddingBottom } from '../aspect-ratio';

describe('aspectRatio', () => {
  it('returns aspect ratio css for an image given a width and height', () => {
    expect(aspectRatio(16, 9).replace(/\s/g, '')).toBe(
      `overflow:hidden;position:relative;padding-bottom:${aspectPaddingBottom(
        16,
        9
      )};>img{position:absolute;display:block;top:0;left:0;width:100%;height:100%;object-fit:cover;}`
    );
  });
  it('returns aspect ratio css for a custom element given a width and height', () => {
    const CustomImageSt = styled.img``;
    expect(aspectRatio(16, 9, CustomImageSt).replace(/\s/g, '')).toBe(
      `overflow:hidden;position:relative;padding-bottom:${aspectPaddingBottom(
        16,
        9
      )};>${CustomImageSt}{position:absolute;display:block;top:0;left:0;width:100%;height:100%;object-fit:cover;}`
    );
  });
});
