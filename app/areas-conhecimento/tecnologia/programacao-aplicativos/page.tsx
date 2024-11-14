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
      3: {
    title: 'Projetos do terceiro trimestre de Programação de Aplicativos',
    intro: 'Express, react..',
    projects: [
      {
        name: 'Atividade Express',
        description: 'Atividade onde foi solicitado a criação de uma página simples em express',
        tags: [
          { name: 'H1', color: 'text-sunglow' },
          { name: 'H2', color: 'text-emerald-500' },
        ],
        image: screenshotApi,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/15O_KhTF9kkQ0KLhsWQVb4VNveQ7-6Vwr/view?usp=sharing',
      },

      {
        name: 'Atividade 02',
        description: 'Atividade treinando o uso de inquirer e o chalk',
        tags: [
          { name: 'H3', color: 'text-sunglow' },
          { name: 'H4', color: 'text-emerald-500' },
        ],
        image: screenshotApi,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/11B-SGeZePgkaTrFGL8IAZ43Zuz8UnKjU/view?usp=sharing',
      },
    ],
  },
};

function ProjectsContent() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 3;
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

export default function ProgramacaoAplicativosPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}