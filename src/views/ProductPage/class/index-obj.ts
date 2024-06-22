/** 單個商品類型 */
export interface IProductItem {
  /** 商品Id */
  productId: string;
  /** 商品圖 */
  productImg: string;
  /** 商品標題 */
  productTitle: string;
  /** 商品價格 */
  productPrice: string;
  /** 商品數量 */
  amount: string;
  /** 商品口味 */
  taste: string[];
}
