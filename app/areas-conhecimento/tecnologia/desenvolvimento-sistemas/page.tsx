'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
import screenshotCalculadora from '@/public/assets/projects/calculadora.jpg';
import screenshotApi from '@/public/assets/projects/api-rest.png';

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
  
  const projectsData: ProjectsData = {
  1: {
    title: 'Projetos do primeiro trimestre de Desenvolvimento de Sistemas',
    intro: 'API, JavaScript, React...',
    projects: [
      {
        name: 'Calculadora de Horas em React',
        description: 'Projeto de uma calculadora em React para treinar os conceitos abordados em sala de aula.',
        tags: [
          { name: 'React', color: 'text-sunglow' },
        ],
        image: screenshotCalculadora,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/1gI14R6hbcjpbs4rDoblM4eS2uAOFOOtK/view?usp=sharing',
      },
      {
        name: 'API - GitHub',
        description: 'Desenvolvimento de uma API em JavaScript com integração ao GitHub.',
        tags: [
          { name: 'JavaScript', color: 'text-sunglow' },
          { name: 'GitHub', color: 'text-blue-400' },
        ],
        image: screenshotApi,
        logo: logoDrive,
        appLink: 'https://github.com/keidi-svg/api',
      },
    ],
  },
  2: {
    title: 'Projetos do segundo trimestre de Desenvolvimento de Sistemas',
    intro: 'Java, Modelagem de Dados...',
    projects: [
      {
        name: 'Projeto Biblioteca em Java',
        description: 'Desenvolvimento de um sistema de gerenciamento de biblioteca em Java.',
        tags: [
          { name: 'Java', color: 'text-blue-400' },
        ],
        image: screenshotApi,
        logo: logoDrive,
        appLink: 'https://github.com/keidi-svg/biblioteca',
      },
    ],
  },
};

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