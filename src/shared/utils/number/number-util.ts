/** 檢核是否為英文數字 */
export function checkIsNum(value: string): boolean {
  return /^[0-9]+$/.test(value);
}

/** 金額分位 */
export function formatMoney(value: string | undefined): string {
  if (!value) {
    return "";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
