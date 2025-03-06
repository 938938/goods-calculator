'use client';

import { ReceiptType } from '@/model/type';
import { receiptState } from '@/recoil/receiptState';
import { totalState } from '@/recoil/totalState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useInitReceiptState = () => {
  const setList = useSetRecoilState(receiptState);
  const setTotal = useSetRecoilState(totalState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const list = localStorage.getItem('receipt');
      if (list) {
        try {
          const receiptList = JSON.parse(list) as ReceiptType[];
          setList(receiptList);

          const totalSoldItems: { [key: string]: ReceiptType['soldItems'][0] } =
            {};

          receiptList.forEach((receipt) => {
            receipt.soldItems.forEach((item) => {
              if (totalSoldItems[item.id]) {
                totalSoldItems[item.id].count += item.count;
                totalSoldItems[item.id].totalCost += item.totalCost;
              } else {
                totalSoldItems[item.id] = { ...item };
              }
            });
          });
          const total = {
            id: 'total',
            date: `${receiptList[0].date.substring(0, 10)} ~ ${receiptList[
              receiptList.length - 1
            ].date.substring(0, 10)}`,
            soldItems: Object.values(totalSoldItems),
            totalCount: Object.values(totalSoldItems).reduce(
              (sum, item) => sum + item.count,
              0
            ),
            result: Object.values(totalSoldItems).reduce(
              (sum, item) => sum + item.totalCost,
              0
            ),
            totalReceipt: receiptList.length,
          } as ReceiptType;

          setTotal(total);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, [setList]);
};

export default useInitReceiptState;
