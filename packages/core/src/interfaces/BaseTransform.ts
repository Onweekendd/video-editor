interface BaseTransform {
  /**@description 平移 */
  onTranslate: (x: number, y: number, z: number) => void;

  /**@description 旋转 */
  onRotate: (x: number, y: number, z: number) => void;

  /**@description 缩放 */
  onScale: (x: number, y: number, z: number) => void;
}

export type { BaseTransform };
