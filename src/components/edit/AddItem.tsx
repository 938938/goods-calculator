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
  const [count, setCount] = useState<number | ''>('');
  const [isError, setIsError] = useState(false);
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
      count: count === '' ? 99 : count,
    };

    setGoodsList((prev) => {
      const newList = [...prev, newItem];
      editGoods(newList);
      return newList;
    });

    setName('');
    setCount('');
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
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Input
        label='재고'
        type='number'
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className='bg-white'
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Input
        label='가격'
        type='number'
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
        className='bg-white'
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Button className='bg-orange-900 w-28 px-4' onClick={onClickHandler}>
        추가
      </Button>
    </BottonBox>
  );
};

export default AddItem;
