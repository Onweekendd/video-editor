interface TimelineProcess {
  /**@description 分割 */
  onSplit: () => void;

  /**@description 合并 */
  onMerge: () => void;
}

export type { TimelineProcess };
