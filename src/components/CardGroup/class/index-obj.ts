/** 卡片元件顯示資料 */
export class CardObj {
  /** 產品id */
  productId!: string;
  /** 產品名稱 */
  productName!: string;
  /** 產品圖片 */
  productImage!: string;
  /** 產品價格 */
  price!: string;
  /** 已售出數 */
  sold!: string;
  /** 優惠文字 */
  banner?: string;

  constructor(
    productId: string,
    productName: string,
    productImage: string,
    price: string,
    sold: string,
    banner?: string
  ) {
    this.productId = productId;
    this.productName = productName;
    this.productImage = productImage;
    this.price = price;
    this.sold = sold;
    this.banner = banner || "";
  }
}
