'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import DelModal from '../DelModal';
import { useState } from 'react';
import { listState } from '@/recoil/listState';
import { deleteGoods } from '@/actions/item-actions';

const ListResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onListResetHandler = () => {
    setGoodsList([]);
    deleteGoods();
    setModalOpen(false);
  };
  return (
    <div className='flex justify-center items-center w-full p-2'>
      <Button onClick={() => setModalOpen(true)} className='bg-gray-800'>
        모든 굿즈 삭제
      </Button>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onListResetHandler}
        type='초기화'
      />
    </div>
  );
};

export default ListResetBtn;
