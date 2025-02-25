'use client';
import Item from './Item';
import { useRecoilValue } from 'recoil';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';

const ItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <div className='h-[calc(100svh-100px)] flex flex-col'>
      <div className='h-12 bg-gray-700 text-white flex'>
        <div className='w-1/3 p-2 text-left'>상품명</div>
        <div className='w-1/4 p-2 text-right'>가격</div>
        <div className='w-5/12 p-2 text-center'>수량</div>
      </div>
      <div className='flex-1 overflow-y-auto'>
        <table className='table-fixed w-full border-collapse'>
          <tbody className='bg-white overflow-y-scroll h-20'>
            {goodsList.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
