import apiInstance from "@/api/index";
import type { CardObj } from "@/components/CardGroup/class/index-obj";
import type { IProductItem } from "@/views/ProductPage/class/index-obj";
/** 獲取商品api */
export const getProductsData = () => {
  return apiInstance.get<CardObj[]>("db.json");
};

/** 搜尋-取得商品資料api */
export const getSearchProductsData = () => {
  return apiInstance.get<CardObj[]>("filter.json");
};

/** 取得單一商品資料 */
export const getProductItemData = () => {
  return apiInstance.get<IProductItem>("productItem.json");
};
