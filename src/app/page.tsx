import ItemList from '@/components/home/ItemList';
import TotalCost from '@/components/home/TotalCost';

export default function Home() {
  return (
    <div className='flex gap-3 flex-col'>
      <ItemList />
      <TotalCost />
    </div>
  );
}
