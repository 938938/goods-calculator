'use client';
import { Button } from '@material-tailwind/react';

const Notice = () => {
  return (
    <div className='absolute top-10 bg-white z-50 m-4 p-4 border-black border-2 rounded'>
      <h2>굿즈 계산기!</h2>
      <ul>
        <li>굿즈 계산 및 재고 관리!</li>
        <li>체크된 총 금액은 아래에!</li>
        <li>판매 버튼 : 정산에 기록!</li>
        <li>초기화 : 기록 없이 초기화!</li>
        <li>수정 : 굿즈 입력 및 수정!</li>
        <li>정산 : 판매내역 확인 가능!</li>
        <li>설정 : 이메일 전송 가능!</li>
        <li>안정적인 사용을 위해 굿즈 계산기는 탭 하나로만 이용해주세요!</li>
      </ul>
      <Button>확인 완료!</Button>
    </div>
  );
};

export default Notice;
