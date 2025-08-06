'use client';

import { Button } from '@material-tailwind/react';

const AddControlBtn = ({
  focusInputHandler,
}: {
  focusInputHandler: () => void;
}) => {
  return (
    <div className='flex justify-center items-center w-full p-2'>
      <Button onClick={focusInputHandler} color='deep-orange'>
        굿즈 추가
      </Button>
    </div>
  );
};

export default AddControlBtn;
