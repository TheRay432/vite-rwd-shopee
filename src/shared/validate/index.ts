import { checkIsNum } from "@/shared/utils/number/number-util";

/** 檢核是否為數字
 * @param errMsg 錯誤訊息
 * @param isAllowEmpty 是否允許空值 - 預設可為空
 */
export function getLengthValidate(errMsg: string, isAllowEmpty = true) {
  return (value: any) => {
    const val: string = value;
    if (!val) return isAllowEmpty || errMsg;
    return checkIsNum(val) ? true : errMsg;
  };
}
