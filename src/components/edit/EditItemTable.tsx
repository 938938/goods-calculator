'use client';

import { useRecoilValue } from 'recoil';
import EditTableRow from './EditTableRow';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';
import ListResetBtn from './ListResetBtn';

const EditItemTable = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);

  return (
    <div className='h-[calc(100svh-150px)] flex flex-col'>
      <div className='bg-gray-700 text-gray-400 flex'>
        <div className='w-1/4 p-2 text-left'>상품명</div>
        <div className='w-1/6 p-2 text-right'>재고</div>
        <div className='w-1/4 p-2 text-right'>가격</div>
        <div className='p-2 text-center'></div>
      </div>
      <div className='flex-1 overflow-y-auto'>
        <table className='table-fixed w-full border-collapse'>
          <tbody className='bg-white overflow-y-scroll h-20'>
            {goodsList.map((item) => (
              <EditTableRow item={item} key={item.id} />
            ))}
          </tbody>
        </table>
        <ListResetBtn />
      </div>
    </div>
  );
};

export default EditItemTable;
