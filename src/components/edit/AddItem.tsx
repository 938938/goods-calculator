'use client';

import { editGoods } from '@/actions/item-actions';
import { listState } from '@/recoil/listState';
import { Button, Input } from '@material-tailwind/react';
import { forwardRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import BottonBox from '../BottonBox';

const AddItem = forwardRef<HTMLInputElement>((_, addRef) => {
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
      initial: stock === '' ? 99 : stock,
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
        inputRef={addRef}
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
        onChange={(e) => setStock(Math.min(Number(e.target.value), 999))}
        className='bg-white'
      />
      <Input
        label='가격'
        type='number'
        value={cost}
        onChange={(e) => setCost(Math.min(Number(e.target.value), 9999999))}
        className='bg-white'
      />
      <Button className='bg-orange-900 w-28 px-2' onClick={onClickHandler}>
        추가
      </Button>
    </BottonBox>
  );
});

AddItem.displayName = 'AddItem';

export default AddItem;
