import DelBtn from '@/components/setting/DelBtn';
import EmailForm from '@/components/setting/EmailForm';

const SettingPage = () => {
  return (
    <div className='bg-gray-700 flex flex-col items-center justify-center h-[calc(100svh-70px)]'>
      <DelBtn />
      <EmailForm />
    </div>
  );
};

export default SettingPage;
