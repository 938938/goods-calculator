import { ReceiptType } from '@/model/type';
import { atom } from 'recoil';

export const listState = atom<ReceiptType[]>({
  key: 'receipt',
  default: [],
});
