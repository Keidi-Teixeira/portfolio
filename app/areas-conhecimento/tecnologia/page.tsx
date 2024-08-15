'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoCanva from '@/public/logos/canva.svg';
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import screenshotCalculadora from '@/public/assets/projects/calculadora.jpg';
import screenshotWireframe from '@/public/assets/projects/wireframe.png';
import screenshotModelagem from '@/public/assets/projects/metodologia.png';
import screenshotApi from '@/public/assets/projects/api-rest.png';
import screenshotBanco from '@/public/assets/projects/banco.jpg';

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

type Subject = {
  subjectName: string;
  projects: Project[];
};

type ProjectData = {
  title: string;
  intro: string;
  subjects: Subject[];
};

type ProjectsData = {
  [key: number]: ProjectData;
};

const projectsData: ProjectsData = {
  1: {
    title: 'Algum dos assuntos trabalhados no primeiro trimestre de Tecnologia',
    intro: 'API, JavaScript, UML...',
    subjects: [
      {
        subjectName: 'Desenvolvimento de Sistemas',
        projects: [
          {
            name: 'Calculadora de Horas em React',
            description:
              'Projeto de uma calculadora em React para treinar os conceitos abordados em sala de aula. Para mais informações, acesse o Link.',
            tags: [
              { 
                name: 'React',
                color: 'text-sunglow',
              },
            ],
            image: screenshotCalculadora,
            logo: logoDrive,
            appLink: 'https://drive.google.com/file/d/1gI14R6hbcjpbs4rDoblM4eS2uAOFOOtK/view?usp=sharing',
          },
          {
            name: 'API - GitHub',
            description:
              'Desenvolvimento de uma API em JavaScript com integração ao GitHub. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'JavaScript',
                color: 'text-sunglow',
              },
              {
                name: 'GitHub',
                color: 'text-blue-400',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://github.com/keidi-svg/api',
          },
          {
            name: 'Trabalho API',
            description:
              'Projeto para criação de uma API com foco em boas práticas de desenvolvimento e organização de código. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'API',
                color: 'text-blue-400',
              },
              {
                name: 'JavaScript',
                color: 'text-aquamarine',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://github.com/keidi-svg/api',
          },
        ],
      },
      {
        subjectName: 'Modelagem de Sistemas',
        projects: [
          {
            name: 'S.A - Wireframe de Alta Fidelidade',
            description:
              'Criação de um wireframe de alta fidelidade para um projeto específico. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Wireframe',
                color: 'text-sunglow',
              },
            ],
            image: screenshotWireframe,
            logo: logoDrive,
            appLink: 'https://www.figma.com/design/N6Vs5RyAaYALYxOdfxenr0/alta-fidelidade?node-id=0-1',
          },
          {
            name: 'S.A - Regra de Negócio',
            description:
              'Definição de regras de negócio para um projeto específico. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Regras de Negócio',
                color: 'text-blue-400',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://docs.google.com/spreadsheets/d/1IzxFM5sd6IsPIRWClpDtWq6_kHHhoRBEb0Tv0loyUXA/edit?usp=sharing',
          },
        ],
      },
      {
        subjectName: 'Implantação e Manutenção de Sistemas',
        projects: [
          {
            name: 'Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS',
            description:
              'Atividade de implantação de um CMS para gerenciamento de conteúdo de uma empresa. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'CMS',
                color: 'text-aquamarine',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://docs.google.com/document/d/14gv9joSTvR9ilj9pG76uIAB0G49KO7qh4E3jpEFbHeM/edit?usp=sharing',
          },
        ],
      },
    ],
  },
  2: {
    title: 'Algum dos assuntos trabalhados no segundo trimestre de Tecnologia',
    intro: 'Java, Modelagem de Dados, CMS...',
    subjects: [
      {
        subjectName: 'Desenvolvimento de Sistemas',
        projects: [
          {
            name: 'Projeto Biblioteca em Java',
            description:
              'Desenvolvimento de um sistema de gerenciamento de biblioteca em Java. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Java',
                color: 'text-blue-400',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://github.com/keidi-svg/biblioteca',
          },
        ],
      },
      {
        subjectName: 'Modelagem de Sistemas',
        projects: [
          {
            name: 'Sala de Aula Invertida - Metodologias de Desenvolvimento',
            description:
              'Atividade de Sala de Aula Invertida focada em Metodologias de Desenvolvimento. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Metodologias',
                color: 'text-aquamarine',
              },
            ],
            image: screenshotModelagem,
            logo: logoCanva,
            appLink: 'https://www.canva.com/design/DAGEpXjTa0E/SKCyYRBTgRd2KYHBKlg6Yg/edit',
          },
        ],
      },
      {
        subjectName: 'Banco de Dados',
        projects: [
          {
            name: 'Lista de Exercícios - Modelo Lógico',
            description:
              'Conjunto de exercícios focados em modelagem lógica de banco de dados. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Modelagem Lógica',
                color: 'text-sunglow',
              },
            ],
            image: screenshotBanco,
            logo: logoDocs,
            appLink: 'https://docs.google.com/document/d/1oLufGoida3Gc0Fg5qii2SPMFACydiuny_uC0t3BKsC4/edit?usp=sharing',
          },
          {
            name: 'Modelagem Sistema de Gestão de Consultório Médico',
            description:
              'Projeto de modelagem de sistema para gestão de consultório médico. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Modelagem de Sistemas',
                color: 'text-blue-400',
              },
            ],
            image: screenshotApi,
            logo: logoDrive,
            appLink: 'https://docs.google.com/document/d/1k8-dVDEdk36cmYqJzb_lysVj1D5zuuLs4OBW4RLQVig/edit?usp=sharing',
          },
          {
            name: 'Pesquisa Normalização de Dados',
            description:
              'Pesquisa focada na normalização de dados em banco de dados. Para mais informações, acesse o Link.',
            tags: [
              {
                name: 'Normalização',
                color: 'text-sunglow',
              },
            ],
            image: screenshotBanco,
            logo: logoDocs,
            appLink: 'https://docs.google.com/document/d/1K6k3s07o-qsOQ61jSPWTAMeGV3UdzJC_dUpDhD7F4pI/edit?usp=sharing',
          },
        ],
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

// Componente Suspense para carregar os projetos
function ProjectsContent() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 1;
  const { title, intro, subjects } = projectsData[trimestre];

  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title={title}
      intro={intro}
    >
      {subjects.map((subject, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-3xl font-semibold text-pink-600 sm:text-4xl">
            {subject.subjectName}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
            {subject.projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      ))}
    </SimpleLayout>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
