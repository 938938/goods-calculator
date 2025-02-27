import ItemTable from '@/components/home/ItemTable';
import TotalCost from '@/components/home/TotalCost';

export default function Home() {
  return (
    <div className='flex gap-3 flex-col'>
      <ItemTable />
      <TotalCost />
    </div>
  );
}
