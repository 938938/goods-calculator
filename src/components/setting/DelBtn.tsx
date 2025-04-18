'use client';

import { Button } from '@material-tailwind/react';
import DelModal from '../DelModal';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { listState } from '@/recoil/listState';
import { receiptState } from '@/recoil/receiptState';
import { totalState } from '@/recoil/totalState';

const DelBtn = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const setList = useSetRecoilState(listState);
  const setReceipt = useSetRecoilState(receiptState);
  const setTotal = useSetRecoilState(totalState);
  const onDeleteHandler = () => {
    localStorage.clear();
    setList([]);
    setReceipt([]);
    setTotal(undefined);
    setModalOpen(false);
  };
  return (
    <>
      <Button onClick={() => setModalOpen(true)} className='w-full'>
        모든 데이터 지우기
      </Button>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onDeleteHandler}
        type='삭제'
      />
    </>
  );
};

export default DelBtn;
