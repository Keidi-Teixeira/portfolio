'use client';

import { useSearchParams } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoYoutube from '@/public/logos/YouTube-White-Full-Color-Logo.wine.svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';
import logoCanva from '@/public/logos/canva.svg';

import screenshotEvolucionismo from '@/public/assets/projects/evolucionismo.jpg';
import screenshotCircuitos from '@/public/assets/projects/circuitos.jpg';
import screenshotOrganica from '@/public/assets/projects/organica.jpg';
import screenshotSolar from '@/public/assets/projects/solar.jpg';
import screenshotRelacoesEcologicas from '@/public/assets/projects/relacoes_ecologicas.png';
import screenshotMeioAmbiente from '@/public/assets/projects/meioambiente.png';

// Tipagem manual (opcional) se necessário
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
  personalProject?: Project;
};

type ProjectsData = {
  [key: number]: ProjectData;
};

// Definição dos dados dos projetos e informações de introdução
const projectsData: ProjectsData = {
  1: {
    title: 'Algum dos assuntos trabalhados no primeiro trimestre de ciências da natureza',
    intro: 'Introdução ao estudo da Química Orgânica, Teorias evolucionistas e Potência elétrica e energia',
    projects: [
      {
        name: 'Meme evolucionismo',
        description: 'Foi realizado um meme de acordo com os assuntos abordados em aula respectivamente: Ideias evolucionistas, os principais cientistas que trabalharam nessa área e alguns conceitos dentro do evolucionismo. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C2',
            color: 'text-sunglow',
          },
          {
            name: 'H11',
            color: 'text-blue-400',
          },
        ],
        image: screenshotEvolucionismo,
        logo: logoYoutube,
        appLink: 'https://youtube.com/shorts/IYz5yj_RfPc?feature=share',
      },
      {
        name: 'Atividade prática e relatório circuitos',
        description: 'Experimentamos as diferenças entre circuitos de resistores em série e em paralelo, explorando como a resistência total é afetada em cada configuração. Utilizamos: Fonte de alimentação (2 pilhas AA) Resistor (3 unidades) Led (3 unidades) Multímetro Fios de conexão de cobre. Fizemos dois testes práticos com um circuitos de Resistores em Série e outro circuitos de Resistores em Paralelo o último acendeu o led. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C2',
            color: 'text-sunglow',
          },
          {
            name: 'C6',
            color: 'text-blue-400',
          },
          {
            name: 'H6',
            color: 'text-emerald-500',
          },
          {
            name: 'H34',
            color: 'text-bright-pink',
          }, 
        ],
        image: screenshotCircuitos,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/15Sui-01Yn19le9-uBEwjFzac8LSNTgf3rrpyTYb8GWw/edit?usp=sharing',
      },
      {
        name: 'Slides revisão orgânica',
        description: 'Slide para revisar os seguintes assuntos de orgânica abordados em aula: Carbono(Tetravalência), Petróleo(Combustíveis fósseis-energia não renovável-pré sal), Hidrocarbonetos(Primeira função só Carbonos e Hidrogênios), Representações(Molecular, Estrutural e em Linha), Classificação Carbono(N° de carbonos ligados, tipo de ligação), Ligação Sigma e Pi(Todas ligações orgânicas). Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C1',
            color: 'text-sunglow',
          },
          {
            name: 'H3',
            color: 'text-blue-400',
          },
          {
            name: 'H3',
            color: 'text-emerald-500',
          },
          {
            name: 'H5',
            color: 'text-bright-pink',
          },
        ],
        image: screenshotOrganica,
        logo: logoSlides,
        appLink: 'https://docs.google.com/presentation/d/18w8wvpV96XQaoF1xElHYXlB1n6H_CvOigL-qs-L5DZg/edit?usp=sharing',
      },
    ],
    personalProject: {
      name: 'Energia solar',
      description: 'Estudo sobre potência e energia elétrica investimentos. Impactos socioambientais e o uso da energia solar. Para mais informações acesse o Link.',
      tags: [
        {
          name: 'C2',
          color: 'text-aquamarine',
        },
        {
          name: 'C6',
          color: 'text-emerald-500',
        },
        {
          name: 'H6',
          color: 'text-bright-pink',
        },
        {
          name: 'H34',
          color: 'text-indigo-300',
        },
      ],
      image: screenshotSolar,
      logo: logoDocs,
      appLink: 'https://docs.google.com/document/d/1mBCj_JitgRzLnwJGG7YtQ-fddisd7I8l6tvFSvC4_zw/edit?usp=sharing',
    },
  },
  2: {
    title: 'Temas trabalhados no segundo trimestre de ciências da natureza',
    intro: 'Relações ecológicas, eletromagnetimos, meio ambiente',
    projects: [
      {
        name: 'Revista eletrônica sobre as relações ecológicas',
        description: 'Criação de uma revista eletrônica detalhando diversas relações ecológicas entre os seres vivos. Para mais informações acesse o Link.',
        tags: [
          {
            name: 'C3',
            color: 'text-sunglow',
          },
          {
            name: 'H15',
            color: 'text-blue-400',
          },
          {
            name: 'H18',
            color: 'text-emerald-500',
          },
        ],
        image: screenshotRelacoesEcologicas,
        logo: logoCanva,
        appLink: 'https://www.canva.com/design/DAGGpGwmdyc/8IU5yU2AhzkwNxf6XD84fQ/edit?utm_content=DAGGpGwmdyc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      },
      {
        name: 'Mapa mental sobre componentes dos circuitos elétricos',
        description: 'Criação de um mapa mental detalhando componentes dos circuitos elétricos, como capacitores, receptores e geradores.',
        tags: [
          {
            name: 'C6',
            color: 'text-sunglow',
          },
          {
            name: 'H35',
            color: 'text-blue-400',
          },
        ],
        image: screenshotCircuitos,
        logo: logoCanva,
        appLink: 'https://www.canva.com/design/DAGNsb0NQ0o/Mz7uIgH4bl9iQ_gdqP6v9g/edit?utm_content=DAGNsb0NQ0o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      },
      {
        name: 'Informativo sobre o meio ambiente',
        description: 'Criação de um informativo com dicas e alertas sobre o uso do plástico e seus efeitos para o meio ambiente, incluindo um cartaz sobre a semana do meio ambiente.',
        tags: [
          {
            name: 'C2',
            color: 'text-aquamarine',
          },
          {
            name: 'C6',
            color: 'text-emerald-500',
          },
          {
            name: 'H6',
            color: 'text-bright-pink',
          },
          {
            name: 'H34',
            color: 'text-indigo-300',
          },
          {
            name: 'H23',
            color: 'text-sunglow',
          },
        ],
        image: screenshotMeioAmbiente,
        logo: logoCanva,
        appLink: 'https://www.canva.com/design/DAGJ4zWqXtw/FsaH5lOZcZgcHjGiUtmMZA/edit',
      },
    ],
    personalProject: {
      name: 'Substâncias químicas',
      description: 'O tema central da atividade foi a análise detalhada de uma substância química, incluindo seu nome oficial e usual, fórmula molecular e estrutural, além de informações sobre suas aplicações, segurança no manuseio e curiosidades históricas. Achei a atividade bastante interessante, pois além de aprofundar o conhecimento sobre a substância química sorteada, foi possível praticar habilidades de comunicação e apresentação em grupo. No entanto, o tempo para a preparação da apresentação poderia ter sido maior, para permitir uma pesquisa mais detalhada e uma apresentação mais elaborada.',
      tags: [
        {
          name: 'C3',
          color: 'text-aquamarine',
        },
        {
          name: 'H15',
          color: 'text-emerald-500',
        },
        {
          name: 'H18',
          color: 'text-bright-pink',
        },
        {
          name: 'C4',
          color: 'text-indigo-300',
        },
      ],
      image: screenshotSolar,
      logo: logoSlides,
      appLink: 'https://docs.google.com/presentation/d/1Y8PtnkJper055NMIK1hRwTo1NJhcHvIulLrlpGZXcJU/edit?usp=sharing',
    },
  },
};

// Acessa o valor do search param "page"
// Função para o título destacado
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
    <Suspense fallback={<div>Carregando...</div>}>
      <Content />
    </Suspense>
  );
}

function Content() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 1;
  const { title, intro, projects, personalProject } = projectsData[trimestre];

  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title={title}
      intro={intro}
    >
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Projetos obrigatórios
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {personalProject && (
        <>
          <h2 className="mt-12 text-4xl font-semibold text-aquamarine sm:text-5xl">
            Projeto de autoria escolhido
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
            <ProjectCard key="personal-project" index={projects.length} {...personalProject} />
          </div>
        </>
      )}
    </SimpleLayout>
  );
}
