'use client';

import { sendEmail } from '@/api/email';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState<string>('');
  
  return (
    <div>
      <Input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => sendEmail(email)}>전송</Button>
    </div>
  );
};

export default EmailForm;
