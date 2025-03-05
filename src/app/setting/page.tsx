import DelBtn from '@/components/setting/DelBtn';
import EmailBtn from '@/components/setting/EmailBtn';

const SettingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100svh-70px)] gap-2'>
      <DelBtn />
      <EmailBtn />
    </div>
  );
};

export default SettingPage;
