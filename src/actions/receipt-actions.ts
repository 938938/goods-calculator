import { ReceiptType } from '@/model/type';

export const editReceipt = async (data: ReceiptType[]) => {
  localStorage.setItem('receipt', JSON.stringify(data));
  return;
};

export const deleteReceipt = async () => {
  localStorage.setItem('receipt', JSON.stringify([]));
  return;
};
