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
          <p className='text-red'>이메일 전송</p>
          <p className='mb-3 font-normal text-gray'>
            전송받을 이메일을 입력해주세요.
          </p>
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
              sendEmail(email, receiptList, totalReceipt);
              setOpen(false);
            }}
            fullWidth
          >
            전송하기
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default EmailForm;
