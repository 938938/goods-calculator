'use client';

import { listState } from '@/recoil/listState';
import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';

const CountResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const onCountResetHandler = () => {
    setGoodsList((prev) => prev.map((ele) => ({ ...ele, count: 0 })));
  };
  return (
    <Button onClick={onCountResetHandler} className='bg-gray-800' size='sm'>
      초기화
    </Button>
  );
};

export default CountResetBtn;
