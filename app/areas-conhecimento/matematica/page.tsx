'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
/* --------------------------- Logos for projects --------------------------- */
import logoYoutube from '@/public/logos/YouTube-White-Full-Color-Logo.wine.svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';
//import logoGenially from '@/public/logos/genially_logo.svg';

import screenshotTesouro from '@/public/assets/projects/tesouro.jpg';
//import screenshotBancoImobiliario from '@/public/assets/projects/banco_imobiliario.jpg';
import screenshotQuebrandoBanca from '@/public/assets/projects/quebrando_banca.jpg';
import screenshotPlatao from '@/public/assets/projects/platao.png';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  logo: any;
  appLink: string;
};

type ProjectData = {
  title: string;
  intro: string;
  projects: Project[];
};

type ProjectsData = {
  [key: number]: ProjectData;
};

const projectsData: ProjectsData = {
  1: {
    title: 'Algum dos assuntos trabalhados no primeiro trimestre de matemática',
    intro: 'Arcos e ângulos: unidades de medida',
    projects: [
      {
        name: 'Caça ao tesouro',
        description:
          'Breve história apresentando uma trilha com um mapa dentro do ambiente da escola utilizando os conceitos de arcos e ângulos que foram abordados em aula para elaborar uma caça ao tesouro. Utilizando uma bússola digital. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C2',
            color: 'text-sunglow',
          },
          {
            name: 'H5',
            color: 'text-blue-400',
          },
          {
            name: 'H16',
            color: 'text-aquamarine',
          },
        ],
        image: screenshotTesouro,
        logo: logoYoutube,
        appLink: 'https://youtu.be/QD5ObRhKrgc?si=iZYhuxxbzdw2mqCM',
      },
    ],
  },
  2: {
    title: 'Temas trabalhados no segundo trimestre de matemática',
    intro: 'Probabilidade e raciocínio combinatório',
    projects: [
      {
        name: 'Banco Imobiliário Floripa',
        description:
          'Criar um jogo no formato de Banco Imobiliário com o tema sendo a cidade de Florianópolis. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C5',
            color: 'text-sunglow',
          },
          {
            name: 'H30',
            color: 'text-blue-400',
          },
          {
            name: 'H31',
            color: 'text-emerald-500',
          },
          {
            name: 'H32',
            color: 'text-bright-pink',
          },
        ],
        image: screenshotTesouro,
        logo: logoYoutube,
        appLink: 'https://view.genially.com/6686976893739700149e41d9/interactive-content-jogo-floripa-invest',
      },
      {
        name: 'Roteiro filme Quebrando a Banca',
        description:
          'Elaborar um roteiro analisando o filme "Quebrando a Banca" para identificar fenômenos e eventos de caráter aleatório, compreendendo o significado da probabilidade. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C5',
            color: 'text-sunglow',
          },
          {
            name: 'H31',
            color: 'text-emerald-500',
          },
          {
            name: 'H32',
            color: 'text-bright-pink',
          },
        ],
        image: screenshotQuebrandoBanca,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/16_eELm-0jzFuLIC8RmyWuJuzjWrwmiUUcHFLKGCIpxg/edit?usp=sharing',
      },
    ],
  },

  3: {
    title: 'Algum dos assuntos trabalhados no terceiro trimestre de matemática',
    intro: 'Geometria plana, Geometria espacial, Números complexos',
    projects: [
      {
        name: 'Poliedros de Platão',
        description:
          'Na atividade sobre Poliedros de Platão, construímos modelos de Tetraedro, Hexaedro e Octaedro usando palitos de churrasco e balas de goma, tiramos fotos e vídeos, e calculamos área e volume de cada figura. Dividimos as tarefas entre construção e cálculos. A maior dificuldade foi manter a estabilidade das formas, mas isso tornou o trabalho mais interessante. Gostei de visualizar as formas tridimensionais e aplicar conceitos matemáticos de forma prática e criativa.',
        tags: [
          {
            name: 'C1',
            color: 'text-sunglow',
          },
          {
            name: 'H4',
            color: 'text-blue-400',
          },
          {
            name: 'H34',
            color: 'text-aquamarine',
          },
          {
            name: 'H36',
            color: 'text-bright-pink',
          },
        ],
        image: screenshotPlatao,
        logo: logoSlides,
        appLink: 'https://docs.google.com/presentation/d/1LPGR-Rp4kXXWJY-jiDaodFMylVOhJJGoxB32mLPlP80/edit?usp=sharing',
      },
    ],
  },
};

// Função para o título destacado
function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Projetos:
    </span>
  );
}

// Componente principal
export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspenseProjects />
    </Suspense>
  );
}

function SuspenseProjects() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 1;
  const { title, intro, projects } = projectsData[trimestre];

  return (
    <SimpleLayout title={title} intro={intro}>
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Projetos obrigatórios
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
