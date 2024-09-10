'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
import screenshotWireframe from '@/public/assets/projects/wireframe.png';
import screenshotModelagem from '@/public/assets/projects/metodologia.png';

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
    title: 'Projetos do primeiro trimestre de Modelagem de Sistemas',
    intro: 'Wireframe, Regras de Negócio...',
    projects: [
      {
        name: 'S.A - Wireframe de Alta Fidelidade',
        description: 'Criação de um wireframe de alta fidelidade para um projeto específico.',
        tags: [
          { name: 'Wireframe', color: 'text-sunglow' },
        ],
        image: screenshotWireframe,
        logo: logoDrive,
        appLink: 'https://www.figma.com/design/N6Vs5RyAaYALYxOdfxenr0/alta-fidelidade?node-id=0-1',
      },
      {
        name: 'S.A - Regra de Negócio',
        description: 'Definição de regras de negócio para um projeto específico.',
        tags: [
          { name: 'Regras de Negócio', color: 'text-blue-400' },
        ],
        image: screenshotModelagem,
        logo: logoDrive,
        appLink: 'https://docs.google.com/spreadsheets/d/1IzxFM5sd6IsPIRWClpDtWq6_kHHhoRBEb0Tv0loyUXA/edit?usp=sharing',
      },
    ],
  },
  2: {
    title: 'Projetos do segundo trimestre de Modelagem de Sistemas',
    intro: 'Metodologias de Desenvolvimento...',
    projects: [
      {
        name: 'Sala de Aula Invertida - Metodologias de Desenvolvimento',
        description: 'Atividade de Sala de Aula Invertida focada em Metodologias de Desenvolvimento.',
        tags: [
          { name: 'Metodologias', color: 'text-aquamarine' },
        ],
        image: screenshotModelagem,
        logo: logoDrive,
        appLink: 'https://www.canva.com/design/DAGEpXjTa0E/SKCyYRBTgRd2KYHBKlg6Yg/edit',
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

export default function ModelagemSistemasPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}