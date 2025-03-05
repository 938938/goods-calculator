'use client';

import { useRecoilValue } from 'recoil';
import BottonBox from '../BottonBox';
import ReceiptResetBtn from './ReceiptResetBtn';
import { totalState } from '@/recoil/totalState';
import { Button } from '@material-tailwind/react';
import { scrollTotalReceiptState } from '@/recoil/scrollTotalReceiptState';

const TotalResult = () => {
  const total = useRecoilValue(totalState);
  const scrollToDiv = useRecoilValue(scrollTotalReceiptState);
  return (
    <BottonBox>
      <ReceiptResetBtn />
      <div className='flex flex-col justify-center items-center'>
        <p className='text-orange-600 text-xs font-bold'>TOTAL</p>
        <p className='flex text-white gap-1'>
          <span className='font-bold'>
            {total?.result.toLocaleString() || 0}
          </span>{' '}
          원
        </p>
      </div>
      <Button className='bg-orange-900' onClick={scrollToDiv ?? (() => {})}>
        TOTAL
      </Button>
    </BottonBox>
  );
};

export default TotalResult;
