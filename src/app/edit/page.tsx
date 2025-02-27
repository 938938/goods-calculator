import AddItem from '@/components/edit/AddItem';
import EditItemTable from '@/components/edit/EditItemTable';

const EditPage = () => {
  return (
    <div className='flex gap-3 flex-col'>
      <EditItemTable />
      <AddItem />
    </div>
  );
};

export default EditPage;
