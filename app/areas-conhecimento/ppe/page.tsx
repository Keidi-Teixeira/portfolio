'use client'

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';
import screenshotCurso from '@/public/assets/projects/certificado.png'; // Substitua com uma imagem relevante

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

type PersonalStudyPlanData = {
  title: string;
  intro: string;
  sections: {
    sectionName: string;
    projects: Project[];
  }[];
};

const personalStudyPlanData: PersonalStudyPlanData = {
  title: 'Plano Pessoal de Estudos',
  intro: 'Aqui está o plano pessoal de estudos, incluindo certificações e cursos relevantes.',
  sections: [
    {
      sectionName: 'Ciências da Natureza',
      projects: [
        {
          name: 'Certificado Curso do MEC: Ação Educativa na Prevenção e Controle das Doenças e Agravos',
          description:
            'Certificado de curso com aproveitamento de 84,17% e duração de 20 horas.',
          tags: [
            {
              name: 'Certificação',
              color: 'text-blue-400',
            },
          ],
          image: screenshotCurso, // Imagem relevante para o curso
          logo: logoDrive,
          appLink: 'https://drive.google.com/file/d/1PgVdUytw0XVoDBHyisnn5HXJd6STPniw/view?usp=sharing',
        },
      ],
    },
    // Adicione outras seções conforme necessário
  ],
};

// Função para o título destacado
function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Plano Pessoal de Estudos:
    </span>
  );
}

export default function PersonalStudyPlan() {
  const { title, intro, sections } = personalStudyPlanData;

  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title={title}
      intro={intro}
    >
      {sections.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-3xl font-semibold text-pink-600 sm:text-4xl">
            {section.sectionName}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
            {section.projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      ))}
    </SimpleLayout>
  );
}
