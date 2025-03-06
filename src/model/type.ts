export type ItemType = {
  id: string;
  name: string;
  cost: number;
  count: number;
  stock: number;
  initial: number;
};

export type soldItemsType = {
  id: string;
  name: string;
  count: number;
  cost: number;
  totalCost: number;
};

export type ReceiptType = {
  id: string;
  date: string;
  soldItems: soldItemsType[];
  totalCount: number;
  result: number;
  totalReceipt?: number;
};
