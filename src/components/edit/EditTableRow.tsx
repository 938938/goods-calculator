'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import DelModal from '../DelModal';
import { ItemType } from '@/model/type';
import { listState } from '@/recoil/listState';
import { editGoods } from '@/actions/item-actions';

const EditTableRow = ({ item }: { item: ItemType }) => {
  const setGoodsList = useSetRecoilState(listState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editValues, setEditValues] = useState<ItemType | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const onEditClickHandler = (item: ItemType) => {
    setEditValues({ ...item });
  };

  const onDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setEditValues((prev) => ({
    //   ...prev,
    //   [name]: name === 'cost' ? Number(value) || 0 : value,
    // }));
    setEditValues((prev) => {
      const updated = prev ?? { id: '', name: '', cost: 0, count: 0 };

      return {
        ...updated,
        [name]: name === 'cost' ? Number(value) || 0 : value,
      };
    });
  };

  const onSaveHandler = () => {
    if (!editValues) return;
    if (!editValues.name) return;
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
      <tr key={item.id}>
        <td className='p-3 w-1/4'>
          {editValues?.id === item.id ? (
            <Input
              name='name'
              value={editValues.name}
              onChange={onDataChangeHandler}
            />
          ) : (
            <p className='truncate'>{item.name}</p>
          )}
        </td>
        <td className='p-3 w-1/6 text-right'>
          {editValues?.id === item.id ? (
            <Input
              name='cost'
              type='number'
              value={editValues.cost}
              onChange={onDataChangeHandler}
            />
          ) : (
            <p>{item.count}</p>
          )}
        </td>
        <td className='p-3 w-1/4 text-right'>
          {editValues?.id === item.id ? (
            <Input
              name='cost'
              type='number'
              value={editValues.cost}
              onChange={onDataChangeHandler}
            />
          ) : (
            <p>{item.cost.toLocaleString()}</p>
          )}
        </td>
        <td className='p-3 flex gap-2'>
          {editValues?.id === item.id ? (
            <Button
              size='sm'
              onClick={onSaveHandler}
              color='blue'
              className='px-3'
            >
              저장
            </Button>
          ) : (
            <Button
              size='sm'
              onClick={() => onEditClickHandler(item)}
              className='px-3'
            >
              수정
            </Button>
          )}
          {editValues?.id === item.id ? (
            <Button
              size='sm'
              onClick={() => setEditValues(null)}
              className='px-3'
            >
              취소
            </Button>
          ) : (
            <Button
              size='sm'
              color='red'
              onClick={() => {
                setDeleteId(item.id);
                setModalOpen(true);
              }}
              className='px-3'
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
