'use client'

//import { Metadata } from 'next';
import Image from 'next/image';

import clsx from 'clsx';

import { Container } from '@/components/Container';
import { ReactNode } from 'react';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';

//export const metadata: Metadata = {
//    title: 'Portfolio',
//    description:
//      'Keidi Teixeira Barbieri. Desenvolvedora de Software Full Stack',
//  };
  
// Portfolio.tsx

function GetPortfolioAntigo() {
    return (
        <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
          
        <Button
        href="https://docs.google.com/presentation/d/182S8JFBHxUqbhtQ58aUEaosYjOR2UPEBaTOBJY4fs-k/edit?usp=sharing"
        variant="primary"
        text="Portfolio Antigo"
        type="button"
        className="mt-6 w-full"
        newTab={true} // Abre o link em uma nova guia
        ></Button>
         </div>
    );
  }

  function GetPrimeiroTrimestre() {
    return (
        <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
          
        <Button
            href="/areas-conhecimento?trimestre=1"
            variant="primary"
            text="Primeiro trimestre"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

  function GetSegundoTrimestre() {
    return (
        <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
          
        <Button
            href="/areas-conhecimento?trimestre=2"
            variant="primary"
            text="Segundo trimestre"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

  function GetTerceiroTrimestre() {
    return (
        <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
          
        <Button
            href="/areas-conhecimento?trimestre=3"
            variant="primary"
            text="Terceiro trimestre (em construção)"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

export default function Portfolio() {
    return (
      <>
        <Container className="mt-12 md:mt-14">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col space-y-10">
        <GetPortfolioAntigo />
        <GetSegundoTrimestre />
            </div>
                    <div className="flex flex-col space-y-10">
                    <GetPrimeiroTrimestre />
                    <GetTerceiroTrimestre />
          </div>
        </div>
      </Container>
      </>
    );
  }
  
