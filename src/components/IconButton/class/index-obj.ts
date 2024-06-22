/** IconButton props */
export interface IconButtonProps {
  /** 是否需要border */
  isNeedBorder?: boolean;
  /** Icon圖示 */
  icon: string;
  /** 圖示大小 */
  iconSize?: "normal" | "large";
  /** Icon顏色 */
  iconColor?: string;
  /** 圖示位置 */
  iconPosition?: "left" | "center" | "right";
}
