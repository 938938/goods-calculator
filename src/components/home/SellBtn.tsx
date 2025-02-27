'use client';

import { editGoods } from '@/actions/item-actions';
import { editReceipt } from '@/actions/receipt-actions';
import { listState } from '@/recoil/listState';
import { receiptState } from '@/recoil/receiptState';
import { Button } from '@material-tailwind/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const SellBtn = () => {
  const [goodsList, setGoodsList] = useRecoilState(listState);
  const setReceiptList = useSetRecoilState(receiptState);
  const onSellHandler = () => {
    const selectedItem = goodsList.filter((ele) => ele.count > 0);
    const result = selectedItem.reduce(
      (prev, cur) => prev + cur.cost * cur.count,
      0
    );
    const receiptData = {
      id: new Date().toISOString(),
      date: new Date()
        .toISOString()
        .slice(0, 16)
        .replace('T', ' ')
        .replace(/-/g, '/'),
      soldItems: selectedItem.map((ele) => {
        return {
          id: ele.id,
          name: ele.name,
          count: ele.count,
          cost: ele.cost,
          totalCost: ele.cost * ele.count,
        };
      }),
      totalCount: selectedItem.reduce((prev, cur) => prev + cur.count, 0),
      result: result,
    };
    setReceiptList((prev) => {
      const newList = [...prev, receiptData];
      editReceipt(newList);
      return newList;
    });
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
