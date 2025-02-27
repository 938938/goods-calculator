import { atom } from 'recoil';

export const scrollTotalReceiptState = atom<(() => void) | null>({
  key: 'scrollTotalReceipt',
  default: null,
});
