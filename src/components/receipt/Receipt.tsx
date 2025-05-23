import { ReceiptType } from '@/model/type';
import { Button } from '@material-tailwind/react';
import DelModal from '../DelModal';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { receiptState } from '@/recoil/receiptState';
import { editReceipt } from '@/actions/receipt-actions';

const Receipt = ({
  receipt,
  type,
}: {
  receipt: ReceiptType;
  type: 'partial' | 'total';
}) => {
  const setReceiptList = useSetRecoilState(receiptState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onDeleteHandler = () => {
    setReceiptList((prev) => {
      const editList = prev.filter((ele) => ele.id !== receipt.id);
      editReceipt(editList);
      return editList;
    });
    setModalOpen(false);
  };
  return (
    <div
      className={`${
        type === 'partial' ? 'bg-white' : 'bg-[#FFFBF4]'
      } p-4 border relative border-y-8 border-dotted border-gray-600 [clip-path:inset(4px_4px_4px_4px)] w-full flex flex-col gap-2`}
    >
      <p
        className={`${
          type === 'partial' ? 'text-gray-500' : 'text-orange-600'
        } text-sm`}
      >
        {receipt.date}
      </p>
      <table className='w-full mt-2 text-sm'>
        <thead>
          <tr className='text-gray-500 border-b'>
            <th className='text-left py-2'>상품명</th>
            <th className='text-right'>갯수</th>
            <th className='text-right'>단가</th>
            <th className='text-right'>총합</th>
          </tr>
        </thead>
        <tbody>
          {receipt.soldItems.map((ele) => (
            <tr key={ele.id} className='border-b'>
              <td className='py-1'>{ele.name}</td>
              <td className='text-right'>{ele.count}</td>
              <td className='text-right'>{ele.cost.toLocaleString()}</td>
              <td className='text-right'>{ele.totalCost.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='font-bold'>
            <td></td>
            <td className='text-right py-2'>{receipt.totalCount}</td>
            <td></td>
            <td className='text-right'>{receipt.result.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>
      <div className='absolute top-2 right-2'>
        {type === 'partial' ? (
          <Button
            variant='outlined'
            color='orange'
            size='sm'
            onClick={() => setModalOpen(true)}
          >
            삭제
          </Button>
        ) : (
          <p className='text-orange-600 text-sm m-2'>
            총 {receipt.totalReceipt!}건 주문
          </p>
        )}
      </div>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onDeleteHandler}
        type='삭제'
      />
    </div>
  );
};

export default Receipt;
