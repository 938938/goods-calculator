'use client';

import { Card, Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import EditTableRow from './EditTableRow';
import useInitListState from '@/hooks/useInitListState';
import { listState } from '@/recoil/listState';

const EditItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);

  return (
    <Card className='h-full w-full overflow-scroll p-4'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <Typography variant='small' className='font-normal opacity-70'>
                상품명
              </Typography>
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <Typography variant='small' className='font-normal opacity-70'>
                가격
              </Typography>
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <Typography variant='small' className='font-normal opacity-70'>
                수정
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map((item) => (
            <EditTableRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default EditItemList;
