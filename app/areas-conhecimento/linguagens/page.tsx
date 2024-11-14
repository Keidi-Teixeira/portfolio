'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
/* --------------------------- Logos for projects --------------------------- */
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';

import screenshotMiniconto from '@/public/assets/projects/miniconto.jpg';
import screenshotModernismo1 from '@/public/assets/projects/modernismo.png';
import screenshotMaquete from '@/public/assets/projects/maquete.jpg';
import screenshotLivro from '@/public/assets/projects/livro.jpg';
import screenshotModernismo from '@/public/assets/projects/modernismo.jpg';
import screenshotRedacao from '@/public/assets/projects/redacao.png';
import screenshotRedacaOnline from '@/public/assets/projects/redacaonline.png';
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';


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
    title: 'Algum dos assuntos trabalhados no primeiro trimestre de linguagens',
    intro: 'Pré-modernismo e Past simple (verb to be)',
    projects: [
      {
        name: 'Miniconto',
        description:
          'Como legenda para a fotografia que seria "postada" no instagram, o grupo deve criar uma micro-narrativa (em inglês) inspirada na imagem, utilizando majoritariamente o tempo verbal estudado (simple past). Para mais informações acesse o Link.',
        tags: [
          { name: 'H11', color: 'text-sunglow' },
          { name: 'H25', color: 'text-blue-400' },
          { name: 'H10', color: 'text-sunglow' },
          { name: 'H24', color: 'text-emerald-500' },
        ],
        image: screenshotMiniconto,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1aX_7HY6CaedP6nUco4zPnTmlTSG6S5ZLze1upd1-F7Y/edit?usp=sharing',
      },
      {
        name: 'Pré-modernismo',
        description:
          'Pesquisa sobre itens relativos a obra estudada. Contexto sócio-histórico da época; Breve biografia do autor; Elementos da narrativa da obra e autor. Para mais informações acesse o Link.',
        tags: [
          { name: 'H3', color: 'text-sunglow' },
          { name: 'H4', color: 'text-blue-400' },
          { name: 'H22', color: 'text-emerald-500' },
          { name: 'H24', color: 'text-bright-pink' },
        ],
        image: screenshotModernismo,
        logo: logoSlides,
        appLink: 'https://docs.google.com/presentation/d/1NzOQUUjzH8gbrUIGNAmijnezUkBeul00hr7DU_h-HbA/edit?usp=sharing',
      },
    ],
  },
  2: {
    title: 'Temas trabalhados no segundo trimestre de linguagens',
    intro: 'Produção textual e análise crítica',
    projects: [
      {
        name: 'Print da Nota da Redação Online',
        description:
          'Avaliação e feedback da redação online, focando em aspectos de estrutura, coesão, e coerência textual. Para mais informações acesse o Link.',
        tags: [
          { name: 'H6', color: 'text-purple-400' },
          { name: 'H5', color: 'text-blue-400' },
          { name: 'H8', color: 'text-cyan-600' },
        ],
        image: screenshotRedacao,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/1RJ1wY5H_XOmIWeMiA4Pr4w9TAJYRfex3/view?usp=sharing', 
      },
      {
        name: 'Maquete livro solitária',
        description:
          'Maquete realizada de acordo com o tema do livro solitária, capturando a essência do que a obra quer transmitir.',
        tags: [
          { name: 'H15', color: 'text-purple-400' }, 
          { name: 'H11', color: 'text-blue-400' },
          { name: 'H25', color: 'text-cyan-600' },
        ],
        image: screenshotMaquete,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/1uXIZ8l4V1CfRJs5yzgh2OhHytz4FUSbF/view?usp=sharing', 
      },
      {
        name: 'Poema',
        description:
          'Poema em inglês e português de acordo com o tema do livro solitária.',
          tags: [
            { name: 'H15', color: 'text-purple-400' }, 
            { name: 'H11', color: 'text-blue-400' },
            { name: 'H25', color: 'text-cyan-600' },
          ],
        image: screenshotLivro,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1HHGrdbvNwUWkYNrHVkA-YJ36ZijWMbubghZUrPWfw3c/edit?usp=sharing', 
      },
    ],
  },




  3: {
    title: 'Temas trabalhados no terceiro trimestre de linguagens',
    intro: 'Modernismo, Geração de 30',
    projects: [
      {
        name: 'Print da Nota da Redação Online',
        description:
          'Avaliação e feedback da redação online, focando em aspectos de estrutura, coesão, e coerência textual. Para mais informações acesse o Link.',
        tags: [
          { name: 'H6', color: 'text-purple-400' },
          { name: 'H5', color: 'text-blue-400' },
          { name: 'H8', color: 'text-cyan-600' },
        ],
        image: screenshotRedacaOnline,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/14dd4m4KC8MUd-7qG0j_czKtV37EsDked/view?usp=sharing', 
      },
      {
        name: 'Modernismo',
        description:
          'Na atividade da "Revista Literária" sobre o Modernismo, pesquisamos suas fases, principais autores e impacto cultural. Dividimos as tarefas entre os membros, cada um abordando um aspecto específico. O desafio foi sintetizar as informações de forma clara e criativa, mantendo o estilo da época. Gostei de explorar as inovações do Modernismo e compreender a importância dos autores na cultura brasileira, tornando o projeto envolvente e enriquecedor.',
        tags: [
          { name: 'H4', color: 'text-purple-400' }, 
          { name: 'H6', color: 'text-blue-400' },
          { name: 'H10', color: 'text-cyan-600' },
          { name: 'H14', color: 'text-sunglow' },
          { name: 'H13', color: 'text-emerald-500' },
          { name: 'H15', color: 'text-bright-pink' },
        ], 
        image: screenshotModernismo1,
        logo: logoDrive,
        appLink: 'https://drive.google.com/file/d/1h7jtWIVM6HYxQSGek7Y-tJ6vQzBdbVk6/view?usp=sharing', 
      },
      {
        name: 'Tropicalismo',
        description:
          'Poema em inglês e português de acordo com o tema do livro solitária.',
          tags: [
            { name: 'H15', color: 'text-purple-400' }, 
            { name: 'H11', color: 'text-blue-400' },
            { name: 'H25', color: 'text-cyan-600' },
          ],
        image: screenshotLivro,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1HHGrdbvNwUWkYNrHVkA-YJ36ZijWMbubghZUrPWfw3c/edit?usp=sharing', 
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

function ProjectsContent() {
  const searchParams = useSearchParams();
  const trimestre = Number(searchParams.get('trimestre')) || 1;
  const { title, intro, projects } = projectsData[trimestre];

  return (
    <SimpleLayout HighlightedWord={HighLightedWord()} title={title} intro={intro}>
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

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
