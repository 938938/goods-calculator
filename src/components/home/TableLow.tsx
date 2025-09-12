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
  const onPlusCountHandler = () => {
    onCountChangeHandler(Math.min(item.count + 1, item.stock));
  };
  return (
    <tr key={item.id} className='border border-t-0'>
      <td className='p-3 w-4/'>
        <p
          className={`truncate ${item.stock === 0 && 'text-gray-400'}`}
          onClick={onPlusCountHandler}
        >
          {item.name}
        </p>
        <div className='flex gap-1'>
          <p className={`text-xs text-gray-500`}>
            가격 : {item.cost.toLocaleString()}원
          </p>
          <p className='text-xs text-gray-500'>/</p>
          <p
            className={`text-xs ${
              item.stock === 0 ? 'text-orange-800' : 'text-gray-500'
            }`}
          >
            잔여 : {item.stock}개
          </p>
        </div>
      </td>
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
            onClick={onPlusCountHandler}
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
