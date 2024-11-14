'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/* --------------------------- Logos for projects --------------------------- */
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';
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
    title: 'Projetos do terceiro trimestre de Testes de Sistemas',
    intro: 'Testes de Sistemas, tipos de testes',
    projects: [
      {
        name: 'Apresentação dos Assuntos da UC',
        description: 'TDD, Testes de Desempenho, Testes Funcionais, Testes de Segurança, Testes de Usabilidade, Testes de Compatibilidade, Testes de Aceitação, Testes de Manutenibilidade',
        tags: [
            { name: 'H1', color: 'text-sunglow' },
            { name: 'H2', color: 'text-blue-400' },
            { name: 'H3', color: 'text-sunglow' },
            { name: 'H4', color: 'text-emerald-500' },
        ],
        image: screenshotApi,
        logo: logoSlides,
        appLink: 'https://docs.google.com/presentation/d/1daXzewUHQGpKbol925dK8wb6wjZCmDm0z-hR4kQAXhw/edit?usp=sharing',
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

export default function TesteSistemasPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}