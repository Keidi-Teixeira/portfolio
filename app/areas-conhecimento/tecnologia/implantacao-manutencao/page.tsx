'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
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
    title: 'Projetos do primeiro trimestre de Implantação e Manutenção de Sistemas',
    intro: 'CMS, Gerenciamento de Conteúdo...',
    projects: [
      {
        name: 'Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS',
        description: 'Implantação de um sistema CMS para gerenciamento de conteúdo.',
        tags: [
          { name: 'CMS', color: 'text-sunglow' },
        ],
        image: screenshotApi,
        logo: logoDrive,
        appLink: 'https://docs.google.com/document/d/14gv9joSTvR9ilj9pG76uIAB0G49KO7qh4E3jpEFbHeM/edit?usp=sharing',
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

export default function ImplantacaoManutencaoPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}