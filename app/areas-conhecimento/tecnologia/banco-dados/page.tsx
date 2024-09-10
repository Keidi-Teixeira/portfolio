'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
import screenshotBanco from '@/public/assets/projects/banco.jpg';
import screenshotSistemaConsultorio from '@/public/assets/projects/api-rest.png';

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
    title: 'Projetos do primeiro trimestre de Banco de Dados',
    intro: 'Modelo Lógico, Modelagem...',
    projects: [
      {
        name: 'Lista de Exercícios - Modelo Lógico',
        description: 'Exercícios sobre Modelo Lógico para aprimorar conceitos de Banco de Dados.',
        tags: [
          { name: 'Modelo Lógico', color: 'text-sunglow' },
        ],
        image: screenshotBanco,
        logo: logoDrive,
        appLink: 'https://docs.google.com/document/d/1oLufGoida3Gc0Fg5qii2SPMFACydiuny_uC0t3BKsC4/edit?usp=sharing',
        },
    ],
  },
  2: {
    title: 'Projetos do segundo trimestre de Banco de Dados',
    intro: 'Modelagem de Dados, Normalização...',
    projects: [
      {
        name: 'Modelagem Sistema de Gestão de Consultório Médico',
        description: 'Modelagem de um sistema de gestão para consultórios médicos.',
        tags: [
          { name: 'Modelagem de Dados', color: 'text-blue-400' },
        ],
        image: screenshotSistemaConsultorio,
        logo: logoDrive,
        appLink: 'https://docs.google.com/document/d/1k8-dVDEdk36cmYqJzb_lysVj1D5zuuLs4OBW4RLQVig/edit?usp=sharing',
    },
      {
        name: 'Pesquisa Normalização de Dados',
        description: 'Pesquisa sobre a normalização de dados em Banco de Dados.',
        tags: [
          { name: 'Normalização', color: 'text-aquamarine' },
        ],
        image: screenshotBanco,
        logo: logoDrive,
        appLink: 'https://docs.google.com/document/d/1K6k3s07o-qsOQ61jSPWTAMeGV3UdzJC_dUpDhD7F4pI/edit?usp=sharing',
    },
    ],
  },
};

function ProjectsContent() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 1;
  const { title, intro, projects } = projectsData[trimestre];

  return (
    <SimpleLayout title={title} intro={intro}>
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">Projetos</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}

export default function BancoDadosPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
