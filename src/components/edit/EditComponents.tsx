'use client';

import { useRef } from 'react';
import EditItemTable from './EditItemTable';
import AddItem from './AddItem';
import useSyncStorage from '@/hooks/useSyncStorage';

const EditComponents = () => {
  useSyncStorage();
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
