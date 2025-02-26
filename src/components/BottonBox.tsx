import React from 'react';

const BottonBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='absolute bottom-1 p-2 w-full'>
      <div className='rounded-xl bg-gray-600 w-full flex p-2 gap-2 items-center justify-between shadow-xl'>
        {children}
      </div>
    </div>
  );
};

export default BottonBox;
