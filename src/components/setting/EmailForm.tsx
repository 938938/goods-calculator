'use client';

import { sendEmail } from '@/api/email';
import useInitReceiptState from '@/hooks/useInitReceiptState';
import { receiptState } from '@/recoil/receiptState';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const EmailForm = () => {
  useInitReceiptState();
  const [email, setEmail] = useState<string>('');
  const receiptList = useRecoilValue(receiptState);
  console.log(receiptList);
  return (
    <div>
      <Input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => sendEmail(email, receiptList)}>전송</Button>
    </div>
  );
};

export default EmailForm;
