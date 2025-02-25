'use client';

import { listState } from '@/recoil/listState';
import { Button } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';

const TotalItem = () => {
  const goodsList = useRecoilValue(listState);
  const checkedItem = goodsList.filter((item) => item.count !== 0);

  return (
    <Button onClick={() => {}} className='bg-gray-700 py-1 px-2' size='sm'>
      <p className='text-orange-700 text-left text-[10px]'>Total</p>
      <p>{checkedItem.length}개 상품</p>
      {/* {checkedItem.map((item, idx) => (
            <p key={item.name}>
              {item.name}({item.cost}원) x {item.count}개{' '}
              {idx !== checkedItem.length - 1 && '+'}
            </p>
          ))} */}
    </Button>
  );
};

export default TotalItem;
