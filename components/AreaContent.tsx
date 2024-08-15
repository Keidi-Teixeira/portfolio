// components/AreaContent.tsx

'use client'

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

function GetHumanas({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <Button
        href={`/areas-conhecimento/ciencias-humanas?trimestre=${trimestre}`}
        variant="primary"
        text="Humanas"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetNatureza({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <Button
        href={`/areas-conhecimento/ciencias-natureza?trimestre=${trimestre}`}
        variant="primary"
        text="Natureza"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetLinguagens({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <Button
        href={`/areas-conhecimento/linguagens?trimestre=${trimestre}`}
        variant="primary"
        text="Linguagens"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetMatematica({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <Button
        href={`/areas-conhecimento/matematica?trimestre=${trimestre}`}
        variant="primary"
        text="Matematica"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetTecnologia({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <Button
        href={`/areas-conhecimento/tecnologia?trimestre=${trimestre}`}
        variant="primary"
        text="Tecnologia da Informação"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetPPE({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <Button
        href={`/areas-conhecimento/ppe?trimestre=${trimestre}`}
        variant="primary"
        text="PPE"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

export default function AreaContent() {
  const params = useSearchParams();
  const trimestre = params.get('trimestre') ?? '';

  return (
    <Container className="mt-12 md:mt-14">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col space-y-10">
          <GetHumanas trimestre={trimestre} />
          <GetNatureza trimestre={trimestre} />
          <GetTecnologia trimestre={trimestre} />
        </div>
        <div className="flex flex-col space-y-10">
          <GetLinguagens trimestre={trimestre} />
          <GetMatematica trimestre={trimestre} />
          <GetPPE trimestre={trimestre} />
        </div>
      </div>
    </Container>
  );
}
