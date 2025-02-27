import { ReceiptType } from '@/model/type';
import { atom } from 'recoil';

export const receiptState = atom<ReceiptType[]>({
  key: 'receipt',
  default: [],
});
