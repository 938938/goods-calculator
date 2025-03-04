import { ReceiptType } from '@/model/type';
import { atom } from 'recoil';

export const totalState = atom<ReceiptType>({
  key: 'total',
  default: undefined,
});
