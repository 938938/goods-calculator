'use client';

import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import DelModal from '../DelModal';
import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { editGoods } from '@/actions/item-actions';
import EditChangeInput from './EditChangeInput';

const EditTableRow = ({ item }: { item: ItemType }) => {
  const setGoodsList = useSetRecoilState(listState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editValues, setEditValues] = useState<ItemType | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const onEditClickHandler = (item: ItemType) => {
    setEditValues({ ...item });
  };

  const onDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues((prev) => {
      const updated = prev ?? {
        id: '',
        name: '',
        cost: 0,
        stock: 0,
        count: 0,
        initial: 99,
      };

      return {
        ...updated,
        [name]:
          name === 'cost'
            ? Number(value) || 0
            : name === 'stock'
            ? Number(value) || 0
            : value,
      };
    });
  };

  const onSaveHandler = () => {
    if (!editValues) return;
    if (!editValues.name) {
      setIsError(true);
      return;
    }
    setGoodsList((prev) => {
      const editList = prev.map((item) =>
        item.id === editValues.id ? editValues : item
      );
      editGoods(editList);
      return editList;
    });
    setEditValues(null);
  };

  const onDeleteHandler = () => {
    if (!deleteId) return;
    setGoodsList((prev) => {
      const editList = prev.filter((ele) => ele.id !== deleteId);
      editGoods(editList);
      return editList;
    });
    setModalOpen(false);
    setDeleteId(null);
  };
  return (
    <>
      <tr key={item.id} className='border border-t-0 flex items-center'>
        <td className='p-3 w-1/4'>
          {editValues?.id === item.id ? (
            <EditChangeInput
              name='name'
              type='text'
              value={editValues.name}
              onDataChangeHandler={onDataChangeHandler}
              isError={isError}
              setIsError={setIsError}
            />
          ) : (
            <p className='truncate'>{item.name}</p>
          )}
        </td>
        <td className='p-3 w-1/6 text-right'>
          {editValues?.id === item.id ? (
            <EditChangeInput
              name='stock'
              type='number'
              value={editValues.stock}
              onDataChangeHandler={onDataChangeHandler}
            />
          ) : (
            <p className='text-gray-600'>
              <span
                className={` ${
                  item.stock === 0 ? 'text-orange-800' : 'text-black'
                } font-bold`}
              >
                {item.stock}
              </span>
              /{item.initial}
            </p>
          )}
        </td>
        <td className='p-3 w-1/4 text-right'>
          {editValues?.id === item.id ? (
            <EditChangeInput
              name='cost'
              type='number'
              value={editValues.cost}
              onDataChangeHandler={onDataChangeHandler}
            />
          ) : (
            <p>{item.cost.toLocaleString()}</p>
          )}
        </td>
        <td className='p-3 flex gap-2 justify-center w-1/3'>
          {editValues?.id === item.id ? (
            <Button
              size='sm'
              onClick={onSaveHandler}
              color='orange'
              className='px-3'
            >
              저장
            </Button>
          ) : (
            <Button
              size='sm'
              onClick={() => onEditClickHandler(item)}
              className='px-3'
              color='orange'
              variant='outlined'
            >
              수정
            </Button>
          )}
          {editValues?.id === item.id ? (
            <Button
              size='sm'
              onClick={() => setEditValues(null)}
              className='px-3'
              variant='outlined'
              color='gray'
            >
              취소
            </Button>
          ) : (
            <Button
              size='sm'
              onClick={() => {
                setDeleteId(item.id);
                setModalOpen(true);
              }}
              className='px-3'
              color='orange'
              variant='outlined'
            >
              삭제
            </Button>
          )}
        </td>
      </tr>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onDeleteHandler}
        type='삭제'
      />
    </>
  );
};

export default EditTableRow;
