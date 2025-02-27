'use client';

import { receiptState } from '@/recoil/receiptState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useInitReceiptState = () => {
  const setList = useSetRecoilState(receiptState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const list = localStorage.getItem('receipt');
      if (list) {
        try {
          setList(JSON.parse(list));
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, [setList]);
};

export default useInitReceiptState;
