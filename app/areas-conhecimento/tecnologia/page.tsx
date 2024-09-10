// app/areas-conhecimento/tecnologia/page.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

function GetModelagemSistemas({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <Button
        href={`/areas-conhecimento/tecnologia/modelagem-sistemas?trimestre=${trimestre}`}
        variant="primary"
        text="Modelagem de Sistemas"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetBancoDados({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <Button
        href={`/areas-conhecimento/tecnologia/banco-dados?trimestre=${trimestre}`}
        variant="primary"
        text="Banco de Dados"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetDesenvolvimentoSistemas({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <Button
        href={`/areas-conhecimento/tecnologia/desenvolvimento-sistemas?trimestre=${trimestre}`}
        variant="primary"
        text="Desenvolvimento de Sistemas"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

function GetImplantacaoManutencao({ trimestre }: { trimestre: string }) {
  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <Button
        href={`/areas-conhecimento/tecnologia/implantacao-manutencao?trimestre=${trimestre}`}
        variant="primary"
        text="Implantação e Manutenção"
        type="button"
        className="mt-6 w-full"
      />
    </div>
  );
}

export default function TecnologiaPage() {
  const params = useSearchParams();
  const trimestre = params.get('trimestre') ?? '';

  return (
    <Container className="mt-12 md:mt-14">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col space-y-10">
          <GetModelagemSistemas trimestre={trimestre} />
          <GetBancoDados trimestre={trimestre} />
        </div>
        <div className="flex flex-col space-y-10">
          <GetDesenvolvimentoSistemas trimestre={trimestre} />
          <GetImplantacaoManutencao trimestre={trimestre} />
        </div>
      </div>
    </Container>
  );
}