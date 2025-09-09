'use client';

import useInitListState from '@/hooks/useInitListState';
import useInitReceiptState from '@/hooks/useInitReceiptState';
import useSyncStorage from '@/hooks/useSyncStorage';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  useInitListState();
  useInitReceiptState();
  useSyncStorage();
  return <>{children}</>;
}
