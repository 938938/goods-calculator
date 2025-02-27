'use client';

import { editGoods } from '@/actions/item-actions';
import { listState } from '@/recoil/listState';
import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';

const SellBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const onSellHandler = () => {
    setGoodsList((prev) => {
      const update = prev.map((ele) => ({
        ...ele,
        stock: ele.stock - ele.count,
        count: 0,
      }));
      editGoods(update);
      return update;
    });
  };
  return (
    <Button onClick={onSellHandler} className='bg-orange-900'>
      판매
    </Button>
  );
};

export default SellBtn;
