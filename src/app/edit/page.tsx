import AddItem from "@/components/edit/AddItem";
import EditItemList from "@/components/edit/EditItemList";
import ListResetBtn from "@/components/edit/ListResetBtn";

const EditPage = () => {
  return (
    <div className='flex gap-3 flex-col'>
      <ListResetBtn />
      <EditItemList />
      <AddItem />
    </div>
  );
};

export default EditPage;
