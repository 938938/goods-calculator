'use client';

import { Button } from '@material-tailwind/react';
import DelModal from '../DelModal';
import { useState } from 'react';

const DelBtn = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onDeleteHandler = () => {
    localStorage.clear();
  };
  return (
    <>
      <Button onClick={() => setModalOpen(true)}>모든 데이터 지우기</Button>;
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
