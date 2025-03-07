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
import { toast } from 'react-toastify';
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
  const [remainingTime, setRemainingTime] = useState<string | null>(null);
  const [errText, setErrText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const receiptList = useRecoilValue(receiptState);
  const totalReceipt = useRecoilValue(totalState);

  const EMAIL_TIME = 'email_time';
  const HOUR_24_MS = 86400000;

  const checkTimeHandler = () => {
    const sentTime = localStorage.getItem(EMAIL_TIME);
    if (!sentTime) {
      setRemainingTime(null);
      return;
    }

    const diff = parseInt(sentTime, 10) + HOUR_24_MS - Date.now();

    if (diff > 0) {
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setRemainingTime(`${hours}시간 ${minutes}분 ${seconds}초`);
    } else {
      setRemainingTime(null);
    }
  };

  useEffect(() => {
    if (open) {
      checkTimeHandler();
      setEmail('');
      setErrText('');
    }
    const timer = setInterval(checkTimeHandler, 1000);
    return () => clearInterval(timer);
  }, [open]);

  const sendEmailHandler = async () => {
    if (remainingTime) {
      return;
    }
    if (!regEmail.test(email)) {
      setErrText('이메일을 정확하게 입력해주세요.');
      return;
    }
    setLoading(true);
    try {
      const response = await sendEmail(email, receiptList, totalReceipt!);
      if (!response.success) throw new Error();

      toast.success(`${email}로 정산 내역을 전송했습니다!`, {
        position: 'bottom-right',
      });
      setOpen(false);
      localStorage.setItem(EMAIL_TIME, Date.now().toString());
    } catch {
      toast.error('이메일 전송에 오류가 발생했습니다.', {
        position: 'bottom-right',
      });
    } finally {
      setLoading(false);
    }
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
            onChange={(e) => {
              setEmail(e.target.value);
              setErrText('');
            }}
            size='lg'
          />
          <p className='text-red-700 text-xs font-semibold text-center'>
            {errText}
          </p>
        </CardBody>
        <CardFooter className='pt-0'>
          <Button
            variant='gradient'
            onClick={sendEmailHandler}
            fullWidth
            disabled={!totalReceipt || !!remainingTime || loading}
            loading={loading}
            className='justify-center'
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
