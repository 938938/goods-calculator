import { atom } from 'recoil';

export const totalState = atom<number>({
  key: 'total',
  default: 0,
});
