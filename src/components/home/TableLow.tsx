'use client';

import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { IconButton, Input } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';

const TableLow = ({ item }: { item: ItemType }) => {
  const setGoodsList = useSetRecoilState(listState);

  const onCountChangeHandler = (newCount: number) => {
    if (newCount > item.stock) {
      newCount = item.stock;
    } else if (newCount < 0) {
      newCount = 0;
    }

    setGoodsList((prev) =>
      prev.map((ele) =>
        ele.id === item.id ? { ...ele, count: newCount } : ele
      )
    );
  };
  return (
    <tr key={item.id} className='border border-t-0'>
      <td className='p-3 w-1/3'>
        {item.stock === 0 && <p className='text-orange-800 text-xs'>품절</p>}
        <p className={`truncate ${item.stock === 0 && 'text-gray-400'}`}>
          {item.name}
        </p>
      </td>
      <td className='p-3 text-right w-1/4'>{item.cost.toLocaleString()}</td>
      <td className='p-3 w-5/12'>
        <div className='flex border rounded-lg gap-2 justify-between'>
          <IconButton
            size='lg'
            variant='text'
            className={`rounded ${item.count === 0 && 'text-gray-200'}`}
            onClick={() => onCountChangeHandler(Math.max(item.count - 1, 0))}
            disabled={item.count === 0}
          >
            -
          </IconButton>
          <div className='w-14'>
            <Input
              type='number'
              value={item.count}
              onChange={(e) => onCountChangeHandler(Number(e.target.value))}
              className={`!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center ${
                item.count === 0 && 'text-gray-200'
              } border-0 focus:ring-0 focus:border-0`}
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              containerProps={{
                className: 'h-12 border-0',
              }}
            />
          </div>
          <IconButton
            size='lg'
            variant='text'
            className={`rounded ${
              item.count === item.stock && 'text-gray-200'
            }`}
            onClick={() =>
              onCountChangeHandler(Math.min(item.count + 1, item.stock))
            }
            disabled={item.count === item.stock}
          >
            +
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

export default TableLow;
