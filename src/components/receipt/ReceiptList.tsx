'use client';

import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { useRecoilValue } from 'recoil';
import Receipt from './Receipt';
import TotalReceipt from './TotalReceipt';

const ReceiptList = () => {
  useInitReceiptState();
  const receiptList = useRecoilValue(receiptState);

  return (
    <div className='flex gap-2 flex-col items-center p-4 h-[calc(100svh-70px)] overflow-y-scroll w-full'>
      {receiptList.map((ele) => (
        <Receipt receipt={ele} key={ele.id} type='partial' />
      ))}
      <div className='w-full mb-20'>
        <TotalReceipt />
      </div>
    </div>
  );
};

export default ReceiptList;
