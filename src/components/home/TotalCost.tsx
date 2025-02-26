'use client';

import { listState } from '@/recoil/listState';
import { useRecoilValue } from 'recoil';
import CountResetBtn from './CountResetBtn';
import TotalItem from './TotalItem';
import SellBtn from './SellBtn';
import BottonBox from '../BottonBox';

const TotalCost = () => {
  const goodsList = useRecoilValue(listState);
  const totalCost = goodsList.reduce((sum, item) => {
    return item.count > 0 ? sum + item.cost * item.count : sum;
  }, 0);

  return (
    <BottonBox>
      <div className='flex gap-2'>
        <CountResetBtn />
        <TotalItem />
      </div>
      <p className='text-white text-xl'>
        <span className='font-bold text-2xl'>{totalCost.toLocaleString()}</span>
        원
      </p>
      <SellBtn />
    </BottonBox>
  );
};

export default TotalCost;
