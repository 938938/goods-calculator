import AddItem from '@/components/edit/AddItem';
import EditItemList from '@/components/edit/EditItemList';

const EditPage = () => {
  return (
    <div className='flex gap-3 flex-col'>
      <EditItemList />
      <AddItem />
    </div>
  );
};

export default EditPage;
