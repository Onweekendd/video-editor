interface BaseElement {
  /**@description 名称 */
  name: string;

  /**@description 文件大小 */
  fileSize: number;

  /**@description 文件类型 */
  fileType: string;

  /**@description 文件创建时间 */
  createTime: Date;
}

export type { BaseElement };
