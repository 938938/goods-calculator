import DelBtn from '@/components/setting/DelBtn';
import EmailBtn from '@/components/setting/EmailBtn';

const SettingPage = () => {
  return (
    <div className='bg-gray-700 flex flex-col items-center justify-center h-[calc(100svh-70px)]'>
      <DelBtn />
      <EmailBtn />
    </div>
  );
};

export default SettingPage;
