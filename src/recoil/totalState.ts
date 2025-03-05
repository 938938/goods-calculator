import { ReceiptType } from '@/model/type';
import { atom } from 'recoil';

export const totalState = atom<ReceiptType | undefined>({
  key: 'total',
  default: undefined,
});
