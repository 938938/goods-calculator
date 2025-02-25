'use client';

import { listState } from '@/recoil/listState';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';

const TotalItem = () => {
  const goodsList = useRecoilValue(listState);
  const checkedItem = goodsList.filter((item) => item.count !== 0);

  return (
    <Popover>
      <PopoverHandler>
        <Button onClick={() => {}} className='bg-gray-700 py-1 px-2' size='sm'>
          <p className='text-orange-700 text-left text-[10px]'>Total</p>
          <p>{checkedItem.length}개 상품</p>
        </Button>
      </PopoverHandler>
      <PopoverContent>
        {checkedItem.length === 0 ? (
          <p>선택된 상품이 없습니다.</p>
        ) : (
          <div>
            {checkedItem.map((item) => (
              <div key={item.name}>
                {item.name}({item.cost}원) x {item.count}개
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TotalItem;
