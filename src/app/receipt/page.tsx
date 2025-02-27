import ReceiptList from '@/components/receipt/ReceiptList';
import TotalResult from '@/components/receipt/TotalResult';

const ReceiptPage = () => {
  return (
    <div className='bg-gray-700'>
      <ReceiptList />
      <TotalResult />
    </div>
  );
};

export default ReceiptPage;
