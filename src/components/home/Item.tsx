'use client';

import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { Button, Input } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';

const Item = ({ item }: { item: ItemType }) => {
  const setGoodsList = useSetRecoilState(listState);

  const onCountChangeHandler = (newCount: number) => {
    setGoodsList((prev) =>
      prev.map((ele) =>
        ele.id === item.id ? { ...ele, count: newCount } : ele
      )
    );
  };
  return (
    <tr key={item.id}>
      <td className='p-4 border-b'>{item.name}</td>
      <td className='p-4 border-b'>{item.cost.toLocaleString()}</td>
      <td className='p-4 border-b flex gap-2'>
        <Button
          onClick={() => onCountChangeHandler(Math.max(item.count - 1, 0))}
        >
          -
        </Button>
        <Input
          label='수량'
          type='number'
          value={item.count}
          onChange={(e) => onCountChangeHandler(Number(e.target.value))}
          min={0}
        />
        <Button onClick={() => onCountChangeHandler(item.count + 1)}>+</Button>
      </td>
    </tr>
  );
};

export default Item;
