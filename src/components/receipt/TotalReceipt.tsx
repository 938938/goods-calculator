'use client';

import { receiptState } from '@/recoil/receiptState';
import { useRecoilState, useRecoilValue } from 'recoil';
import Receipt from './Receipt';
import { ReceiptType } from '@/model/type';
import { totalState } from '@/recoil/totalState';

const TotalReceipt = () => {
  const receiptList = useRecoilValue(receiptState);
  const [totalCost, setTotalCost] = useRecoilState(totalState);
  if (!receiptList || receiptList.length === 0) {
    return <></>;
  }

  const totalSoldItems: { [key: string]: ReceiptType['soldItems'][0] } = {};

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

  setTotalCost(
    Object.values(totalSoldItems).reduce((sum, item) => sum + item.totalCost, 0)
  );

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
    result: totalCost,
  } as ReceiptType;

  return <Receipt receipt={total} type='total' />;
};

export default TotalReceipt;
