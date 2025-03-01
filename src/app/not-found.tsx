'use client';

import { Button } from '@material-tailwind/react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='bg-gray-700 h-[calc(100svh-70px)] flex flex-col items-center justify-center text-white'>
      <p>잘못 접속하셨어요!</p>
      <p>위에서 원하시는 페이지를 누르거나,</p>
      <p>아래 버튼을 통해 [계산] 페이지로 이동해주세요!</p>
      <Button className='mt-5'>
        <Link href={'/'}>계산 페이지로!</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
