'use client';

import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Receipt from './Receipt';
import TotalReceipt from './TotalReceipt';
import { scrollTotalReceiptState } from '@/recoil/scrollTotalReceiptState';
import { useEffect, useRef } from 'react';

const ReceiptList = () => {
  useInitReceiptState();
  const receiptList = useRecoilValue(receiptState);
  const divRef = useRef<HTMLDivElement>(null);
  const setScrollFn = useSetRecoilState(scrollTotalReceiptState);

  useEffect(() => {
    setScrollFn(() => () => {
      divRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [setScrollFn]);

  return (
    <div className='flex gap-2 flex-col items-center p-4 h-[calc(100svh-70px)] overflow-y-scroll w-full'>
      {receiptList.map((ele) => (
        <Receipt receipt={ele} key={ele.id} type='partial' />
      ))}
      <div className='w-full mb-14 mt-4' ref={divRef}>
        <TotalReceipt />
      </div>
    </div>
  );
};

export default ReceiptList;
