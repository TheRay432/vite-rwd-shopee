import type { IButtonSize } from "@/components/Button/enum/index-enum";
import {
  stringToSearchButtonGroupEnum,
  type SearchButtonGroupEnum,
} from "@/views/SearchResultPage/enum/index-enum";

/** 共用-按鈕元件-props */
export interface IButtonProps {
  /** 顯示資料 */
  dataOption: IButtonOption;
  /** 按鈕背景顏色 */
  bgColor?: string;
  /** 按鈕大小 */
  size?: IButtonSize;
  /** 是否為群組(給群組按鈕元件判斷用) */
  isGroup?: boolean;
  /** 群組中是否被選取 */
  isSelect?: boolean;
}
/** 共用-按鈕元件-顯示資料 */
export interface IButtonOption {
  /** 顯示文字 */
  content: string;
  /** 顯示圖示(可選) */
  icon?: string;
}

/** 按鈕群組-props */
export interface IButtonGroupProps {
  /** 按鈕資料 */
  data: ButtonGroupOption[];
  /** 頁籤 */
  tab: SearchButtonGroupEnum;
}

/** 按鈕群組元件-按鈕資料 */
export class ButtonGroupOption {
  /** 顯示資料id */
  id!: SearchButtonGroupEnum;
  /** 顯示文字 */
  content = "";

  constructor(id: string, content: string) {
    this.id = stringToSearchButtonGroupEnum(id);
    this.content = content;
  }
}

/** 尺寸按鈕元件-props */
export interface IButtonSizeProps {
  data: any;
  selectData: any;
}
