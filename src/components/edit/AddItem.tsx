'use client';

import { editGoods } from '@/actions/item-actions';
import { listState } from '@/recoil/listState';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const AddItem = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState<number | ''>('');
  const setGoodsList = useSetRecoilState(listState);

  const onClickHandler = () => {
    if (!name.trim()) return;

    const newItem = {
      id: new Date().toISOString(),
      name,
      cost: cost === '' ? 0 : cost,
      count: 10,
    };

    setGoodsList((prev) => {
      const newList = [...prev, newItem];
      editGoods(newList);
      return newList;
    });

    setName('');
    setCost('');
  };

  return (
    <div>
      <div className='flex'>
        <Input
          label='상품명'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label='가격'
          type='number'
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />
      </div>
      <Button className='w-full' onClick={onClickHandler}>
        추가
      </Button>
    </div>
  );
};

export default AddItem;
