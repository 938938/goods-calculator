'use client';

import { ItemType, ReceiptType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { receiptState } from '@/recoil/receiptState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useSyncStorage = () => {
  const setGoodsList = useSetRecoilState(listState);
  const setReceiptList = useSetRecoilState(receiptState);

  useEffect(() => {
    const handler = (event: StorageEvent) => {
      if (!event.key) {
        setGoodsList([]);
        setReceiptList([]);
      }

      if (event.key === 'list') {
        const newData: ItemType[] = event.newValue
          ? JSON.parse(event.newValue)
          : [];
        setGoodsList(newData);
      }

      if (event.key === 'receipt') {
        const newData: ReceiptType[] = event.newValue
          ? JSON.parse(event.newValue)
          : [];
        setReceiptList(newData);
      }
    };

    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('storage', handler);
    };
  }, [setGoodsList, setReceiptList]);
};

export default useSyncStorage;
