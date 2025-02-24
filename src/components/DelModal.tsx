'use client';

import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

const DelModal = ({
  open,
  setOpen,
  onDeleteHandler,
  type,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  onDeleteHandler: () => void;
  type: '삭제' | '초기화';
}) => {
  return (
    <Dialog open={open} handler={() => setOpen(false)} size='xs'>
      <DialogHeader>정말 {type}하겠습니까?</DialogHeader>
      <DialogFooter className='flex items-center justify-center gap-3'>
        <Button
          variant='text'
          color='red'
          onClick={() => setOpen(false)}
          className='mr-1'
        >
          <span>취소</span>
        </Button>
        <Button variant='gradient' color='green' onClick={onDeleteHandler}>
          <span>실행</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DelModal;
