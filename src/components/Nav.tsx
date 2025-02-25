'use client';

import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className='bg-gray-700 p-2'>
      <div className='flex gap-1 p-2 bg-gray-800 rounded-xl h-12'>
        <Link className='basis-1/3' href={'/'}>
          <Button
            size='sm'
            className='w-full text-white'
            color='deep-orange'
            variant={pathname === '/' ? 'filled' : 'text'}
          >
            계산
          </Button>
        </Link>
        <Link className='basis-1/3' href={'/edit'}>
          <Button
            size='sm'
            className='w-full text-white'
            color='deep-orange'
            variant={pathname === '/edit' ? 'filled' : 'text'}
          >
            수정
          </Button>
        </Link>
        <Link className='basis-1/3' href={'/receipt'}>
          <Button
            size='sm'
            className='w-full text-white'
            color='deep-orange'
            variant={pathname === '/receipt' ? 'filled' : 'text'}
          >
            정산
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
