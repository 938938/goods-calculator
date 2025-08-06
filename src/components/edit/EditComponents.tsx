'use client';

import { useRef } from 'react';
import EditItemTable from './EditItemTable';
import AddItem from './AddItem';

const EditComponents = () => {
  const addRef = useRef<HTMLInputElement>(null);
  const focusInputHandler = () => {
    console.log(addRef);
    addRef.current!.focus();
  };
  return (
    <>
      <EditItemTable focusInputHandler={focusInputHandler} />
      <AddItem ref={addRef} />
    </>
  );
};

export default EditComponents;
