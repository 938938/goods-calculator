'use client';

import { Input } from '@material-tailwind/react';

const EditChangeInput = ({
  name,
  type,
  value,
  onDataChangeHandler,
  isError,
  setIsError,
}: {
  name: string;
  type: 'text' | 'number';
  value: string | number;
  onDataChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  setIsError?: (value: boolean) => void;
}) => {
  return (
    <Input
      name={name}
      type={type}
      value={value}
      onChange={(e) => {
        onDataChangeHandler(e);
        setIsError!(false);
      }}
      className='!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      labelProps={{
        className: 'before:content-none after:content-none',
      }}
      error={isError ? true : false}
    />
  );
};

export default EditChangeInput;
