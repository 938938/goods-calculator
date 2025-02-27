'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import DelModal from '../DelModal';
import { useState } from 'react';
import { receiptState } from '@/recoil/receiptState';
import { deleteReceipt } from '@/actions/receipt-actions';

const ReceiptResetBtn = () => {
  const setReceiptList = useSetRecoilState(receiptState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onListResetHandler = () => {
    setReceiptList([]);
    deleteReceipt();
    setModalOpen(false);
  };
  return (
    <div className='flex justify-center items-center'>
      <Button onClick={() => setModalOpen(true)} className='bg-gray-800'>
        초기화
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

export default ReceiptResetBtn;
