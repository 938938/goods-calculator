import { ReceiptType } from '@/model/type';
import { Button } from '@material-tailwind/react';

const Receipt = ({
  receipt,
  type,
}: {
  receipt: ReceiptType;
  type: 'partial' | 'total';
}) => {
  return (
    <div
      className={`${
        type === 'partial' ? 'bg-white' : 'bg-[#FFFBF4]'
      } p-4 border relative border-y-8 border-dotted border-gray-600 [clip-path:inset(4px_4px_4px_4px)] w-full flex flex-col gap-2`}
    >
      <div className='text-gray-500 text-sm'>{receipt.date}</div>
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
              <td className='text-right'>{ele.cost}</td>
              <td className='text-right'>{ele.totalCost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='font-bold'>
            <td></td>
            <td className='text-right py-2'>{receipt.totalCount}</td>
            <td></td>
            <td className='text-right'>{receipt.result}</td>
          </tr>
        </tfoot>
      </table>
      <Button
        variant='outlined'
        color='orange'
        className='absolute top-2 right-2'
        size='sm'
      >
        삭제
      </Button>
    </div>
  );
};

export default Receipt;
