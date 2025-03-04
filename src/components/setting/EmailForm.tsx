'use client';

import { sendEmail } from '@/api/email';
import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { totalState } from '@/recoil/totalState';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const EmailForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  useInitReceiptState();
  const [email, setEmail] = useState<string>('');
  const receiptList = useRecoilValue(receiptState);
  const totalReceipt = useRecoilValue(totalState);

  return (
    <Dialog open={open} handler={() => setOpen(false)} size='xs'>
      <Card className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4'>
          <p className='text-black text-lg'>이메일 전송</p>
          <div>
            <p className='font-normal text-gray'>정산 내역을 전송받을</p>
            <p className='font-normal text-gray'>이메일을 입력해주세요.</p>
            <p className='text-sm text-red-600'>
              이메일은 하루에 한 번만 보낼 수 있습니다.
            </p>
          </div>
          <Input
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size='lg'
          />
        </CardBody>
        <CardFooter className='pt-0'>
          <Button
            variant='gradient'
            onClick={() => {
              sendEmail(email, receiptList, totalReceipt!);
              setOpen(false);
            }}
            fullWidth
            disabled={!totalReceipt}
          >
            {!totalReceipt ? '전송할 데이터가 없습니다.' : '전송하기'}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default EmailForm;
