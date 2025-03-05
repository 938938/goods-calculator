'use client';

import { sendEmail } from '@/api/email';
import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { totalState } from '@/recoil/totalState';
import {
  Button,
  CardBody,
  CardFooter,
  Dialog,
  Input,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
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
  const [remainingTime, setRemainingTime] = useState<string | undefined>(
    undefined
  );

  const receiptList = useRecoilValue(receiptState);
  const totalReceipt = useRecoilValue(totalState);

  const EMAIL_TIME = 'email_time';
  const HOUR_24_MS = 86400000;

  const checkTimeHandler = () => {
    const sentTime = localStorage.getItem(EMAIL_TIME);
    if (!sentTime) {
      setRemainingTime(undefined);
      return;
    }

    const sentTimestamp = parseInt(sentTime, 10);
    const currentTime = Date.now();
    const diff = sentTimestamp + HOUR_24_MS - currentTime;

    if (diff > 0) {
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setRemainingTime(() => `${hours}시간 ${minutes}분 ${seconds}초`);
      return true;
    }
    return undefined;
  };

  useEffect(() => {
    if (open) {
      checkTimeHandler();
    }
  }, [open]);

  const sendEmailHandler = () => {
    if (checkTimeHandler()) {
      return;
    }
    sendEmail(email, receiptList, totalReceipt!);
    setOpen(false);

    localStorage.setItem(EMAIL_TIME, Date.now().toString());
  };

  return (
    <Dialog open={open} handler={() => setOpen(false)} size='xs'>
      <div className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4'>
          <p className='text-black text-lg'>이메일 전송</p>
          <div>
            <p className='font-normal text-gray'>정산 내역을 전송받을</p>
            <p className='font-normal text-gray'>이메일을 입력해주세요.</p>
            <p className='text-xs text-red-700 font-semibold'>
              이메일은 24시간마다 한 번만 보낼 수 있습니다.
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
            onClick={sendEmailHandler}
            fullWidth
            disabled={!totalReceipt}
          >
            {!totalReceipt && '전송할 데이터가 없습니다.'}
            {remainingTime && `재전송 가능: ${remainingTime} 후`}
            {totalReceipt && !remainingTime && '전송하기'}
          </Button>
        </CardFooter>
      </div>
    </Dialog>
  );
};

export default EmailForm;
