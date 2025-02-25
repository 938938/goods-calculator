'use client';
import Item from './Item';
import { useRecoilValue } from 'recoil';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';

const ItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <table className='w-full min-w-max table-fixed bg-gray-50'>
      <thead className='bg-gray-700'>
        <tr>
          <th className='text-white p-2 text-left w-1/3'>
            <p className='font-normal opacity-70 text-sm'>상품명</p>
          </th>
          <th className='text-white p-2 text-right w-1/4'>
            <p className='font-normal opacity-70 text-sm'>가격</p>
          </th>
          <th className='text-white p-2 w-5/12'>
            <p className='font-normal opacity-70 text-sm'>수량</p>
          </th>
        </tr>
      </thead>
      <tbody className='bg-white '>
        {goodsList.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
