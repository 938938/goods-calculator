'use client';

import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const initialData = [
  {
    id: '1',
    name: '굿즈 계산 및 재고 관리!',
    cost: 0,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '2',
    name: '체크된 총 금액은 아래에!',
    cost: 1000,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '3',
    name: '판매 버튼 : 정산에 기록!',
    cost: 2000,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '4',
    name: '초기화 : 기록 없이 초기화!',
    cost: 3000,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '5',
    name: '수정 : 굿즈 입력 및 수정!',
    cost: 4000,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '6',
    name: '정산 : 판매내역 확인 가능!',
    cost: 5000,
    count: 0,
    stock: 10,
    initial: 10,
  },
  {
    id: '7',
    name: '설정 : 이메일 전송 가능!',
    cost: 10000,
    count: 0,
    stock: 10,
    initial: 10,
  },
];

const getInitialList = (): ItemType[] => {
  try {
    const storedList = localStorage.getItem('list');
    return storedList
      ? JSON.parse(storedList).map((ele: ItemType) => ({ ...ele, count: 0 }))
      : initialData;
  } catch (error) {
    console.error('Failed to parse list from localStorage:', error);
    return initialData;
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
