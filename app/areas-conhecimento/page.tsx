// app/areas-conhecimento/page.tsx

import { Suspense } from 'react';
import AreaContent from '@/components/AreaContent';

export default function AreasConhecimento() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AreaContent />
    </Suspense>
  );
}
