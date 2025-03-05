'use client';

import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import EmailForm from './EmailForm';

const EmailBtn = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>이메일 전송하기</Button>
      <EmailForm open={open} setOpen={setOpen} />
    </>
  );
};

export default EmailBtn;
