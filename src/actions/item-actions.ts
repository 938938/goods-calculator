import { ItemType } from '@/model/type';

export const editGoods = async (data: ItemType[]) => {
  localStorage.setItem('list', JSON.stringify(data));
  return;
};

export const deleteGoods = async () => {
  localStorage.setItem('list', JSON.stringify([]));
  return;
};
