'use client';

import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const getInitialList = (): ItemType[] => {
  try {
    const storedList = localStorage.getItem('list');
    return storedList
      ? JSON.parse(storedList).map((ele: ItemType) => ({ ...ele, count: 0 }))
      : [{ id: '123', name: '예시 아이템', cost: 1000, count: 0, stock: 10 }];
  } catch (error) {
    console.error('Failed to parse list from localStorage:', error);
    return [{ id: '123', name: '예시 아이템', cost: 1000, count: 0, stock: 10 }];
  }
};

const useInitListState = () => {
  const setList = useSetRecoilState(listState);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setList(getInitialList());
  }, [setList]);
};

export default useInitListState;
