'use client';
import Item from './Item';
import { useRecoilValue } from 'recoil';
import { Card } from '@material-tailwind/react';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';

const ItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <Card className='h-full w-full overflow-scroll p-4'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <p className='font-normal opacity-70'>상품명</p>
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <p className='font-normal opacity-70'>가격</p>
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <p className='font-normal opacity-70'>수량</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ItemList;
