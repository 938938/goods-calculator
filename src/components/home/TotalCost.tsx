'use client';

import { listState } from '@/recoil/listState';
import { useRecoilValue } from 'recoil';
import CountResetBtn from './CountResetBtn';
import TotalItem from './TotalItem';
import SellBtn from './SellBtn';

const TotalCost = () => {
  const goodsList = useRecoilValue(listState);
  const totalCost = goodsList.reduce((sum, item) => {
    return item.count > 0 ? sum + item.cost * item.count : sum;
  }, 0);

  return (
    <div className='absolute bottom-1 p-2 w-full'>
      <div className='rounded-xl bg-gray-600 w-full flex p-2 gap-2 items-center justify-between shadow-xl'>
        <div className='flex gap-2'>
          <CountResetBtn />
          <TotalItem />
        </div>
        <p className='text-white text-xl'>
          <span className='font-bold text-2xl'>
            {totalCost.toLocaleString()}
          </span>
          원
        </p>
        <SellBtn />
      </div>
    </div>
  );
};

export default TotalCost;
