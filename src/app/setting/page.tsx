import Ask from '@/components/setting/Ask';
import DelBtn from '@/components/setting/DelBtn';
import EmailBtn from '@/components/setting/EmailBtn';

const SettingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100svh-70px)] gap-2 relative'>
      <DelBtn />
      <EmailBtn />
      <Ask />
    </div>
  );
};

export default SettingPage;
