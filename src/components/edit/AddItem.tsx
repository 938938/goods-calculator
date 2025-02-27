'use client';

import { editGoods } from '@/actions/item-actions';
import { listState } from '@/recoil/listState';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import BottonBox from '../BottonBox';

const AddItem = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState<number | ''>('');
  const [stock, setStock] = useState<number | ''>('');
  const [isError, setIsError] = useState<boolean>(false);
  const setGoodsList = useSetRecoilState(listState);

  const onClickHandler = () => {
    if (!name.trim()) {
      setIsError(true);
      return;
    }

    setIsError(false);

    const newItem = {
      id: new Date().toISOString(),
      name,
      cost: cost === '' ? 0 : cost,
      stock: stock === '' ? 99 : stock,
      count: 0,
    };

    setGoodsList((prev) => {
      const newList = [...prev, newItem];
      editGoods(newList);
      return newList;
    });

    setName('');
    setStock('');
    setCost('');
  };

  return (
    <BottonBox>
      <Input
        label='상품명'
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setIsError(false);
        }}
        className='bg-white'
        error={isError ? true : false}
      />
      <Input
        label='재고'
        type='number'
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className='bg-white'
      />
      <Input
        label='가격'
        type='number'
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
        className='bg-white'
      />
      <Button className='bg-orange-900 w-28 px-4' onClick={onClickHandler}>
        추가
      </Button>
    </BottonBox>
  );
};

export default AddItem;
