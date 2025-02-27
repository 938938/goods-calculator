'use client';

import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { useRecoilValue } from 'recoil';
import Receipt from './Receipt';

const ReceiptList = () => {
  useInitReceiptState();
  const receiptList = useRecoilValue(receiptState);
  return (
    <div className='flex gap-2 flex-col items-center p-4 h-[calc(100svh-60px)]'>
      {receiptList.map((ele) => (
        <Receipt receipt={ele} key={ele.id} />
      ))}
    </div>
  );
};

export default ReceiptList;
