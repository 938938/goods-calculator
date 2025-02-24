'use client';

import { Button } from '@material-tailwind/react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='flex gap-1'>
      <Link href={'/'}>
        <Button>목록</Button>
      </Link>
      <Link href={'/edit'}>
        <Button>수정</Button>
      </Link>
    </div>
  );
};

export default Nav;
