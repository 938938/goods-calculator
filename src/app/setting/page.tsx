import Ask from '@/components/setting/Ask';
import DelBtn from '@/components/setting/DelBtn';
import EmailBtn from '@/components/setting/EmailBtn';
import HelpBtn from '@/components/setting/HelpBtn';

const SettingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100svh-70px)] gap-2 relative p-10'>
      <DelBtn />
      <EmailBtn />
      <HelpBtn />
      <Ask />
    </div>
  );
};

export default SettingPage;
