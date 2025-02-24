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
    <>
      <Button onClick={() => setModalOpen(true)} className='w-full'>
        목록 모두 삭제
      </Button>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onListResetHandler}
        type='초기화'
      />
    </>
  );
};

export default ListResetBtn;
