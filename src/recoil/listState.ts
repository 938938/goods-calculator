import { ItemType } from '@/model/type';
import { atom } from 'recoil';

export const listState = atom<ItemType[]>({
  key: 'list',
  default: [],
});
