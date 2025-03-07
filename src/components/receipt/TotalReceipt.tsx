'use client';

import { useRecoilValue } from 'recoil';
import Receipt from './Receipt';
import { totalState } from '@/recoil/totalState';

const TotalReceipt = () => {
  const total = useRecoilValue(totalState);
  if (!total) return <></>;

  return <Receipt receipt={total} type='total' />;
};

export default TotalReceipt;
