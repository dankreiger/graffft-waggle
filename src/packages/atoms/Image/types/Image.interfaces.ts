export type AspectRatio = {
  /**
   * width number (px)
   */
  width: number;

  /**
   * width number (px)
   */
  height: number;
};

export interface ImageProps {
  /**
   * object with width and height as numbers (px)
   */
  aspectRatio: AspectRatio;

  /**
   * image source
   */
  imgSrc: string;

  /**
   * image alt
   */
  imgAlt: string;
}
