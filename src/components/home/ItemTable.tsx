'use client';
import TableLow from './TableLow';
import { useRecoilValue } from 'recoil';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';

const ItemTable = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <div className='h-[calc(100svh-70px)] flex flex-col pb-16'>
      <div className='bg-gray-700 text-gray-400 flex'>
        <div className='w-4/5 p-2 text-left'>상품명</div>
        <div className='w-5/12 p-2 text-center'>수량</div>
      </div>
      <div
        className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <table className='table-fixed w-full border-collapse'>
          <tbody className='bg-white h-20'>
            {goodsList.map((item) => (
              <TableLow item={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
