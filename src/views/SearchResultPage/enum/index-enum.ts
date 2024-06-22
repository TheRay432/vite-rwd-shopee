/** 搜尋結果-按鈕群組分類 */
export enum SearchButtonGroupEnum {
  /** 綜合排名 */
  Composite = "composite",
  /** 最新商品 */
  New = "new",
  /** 熱銷商品 */
  Popular = "popular",
}
/** 將字串轉成enum */
export function stringToSearchButtonGroupEnum(
  value: string
): SearchButtonGroupEnum {
  if (!value) throw new Error("value is empty");

  switch (value) {
    case "composite":
      return SearchButtonGroupEnum.Composite;
    case "new":
      return SearchButtonGroupEnum.New;
    case "popular":
      return SearchButtonGroupEnum.Popular;
    default:
      throw new Error("value is not in SearchButtonGroupEnum");
  }
}
