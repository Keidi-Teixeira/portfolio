 'use client';

import { useSearchParams } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Suspense } from 'react';

// Importação de logos e imagens de projetos
import logoForms from '@/public/logos/Google_Forms_logo.svg';
import logoCanva from '@/public/logos/canva.svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';
import screenshot1984Movie from '@/public/assets/projects/filmes1984.jpg';
import screenshotAmericanProgress from '@/public/assets/projects/American_Progress_(John_Gast_painting).jpg';
import screenshotDoutrina from '@/public/assets/projects/doutrina.png';
import screenshotFilme from '@/public/assets/projects/filme.jpg';
import screenshotTorres from '@/public/assets/projects/torres.jpg';
import screenshotHungryPlanet from '@/public/assets/projects/hungryplanet.png';
import screenshotguerrafria from '@/public/assets/projects/guerra-fria.jpg';
import screenshotditadura from '@/public/assets/projects/ditadura.jpg';

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
    title: 'Algum dos assuntos trabalhados no primeiro trimestre de ciências humanas',
    intro: 'Imperialismo no século XIX e ocupação da Ásia e da África, e EUA no século XIX e imperialismo.',
    projects: [
      {
        name: 'Enigma',
        description: 'Foi realizado um enigma abordando os assuntos em aula em especifico sobre a queda das torres gêmeas...',
        tags: [
          { name: 'C3', color: 'text-sunglow' },
          { name: 'H15', color: 'text-blue-400' },
          { name: 'H16', color: 'text-aquamarine' },
        ],
        image: screenshotTorres,
        logo: logoForms,
        appLink: 'https://forms.gle/PTpG8w1KhHBkizJ7A',
      },
      {
        name: 'Análise pintura',
        description: 'Foi realizada uma análise da pintura Progresso Americano (1872), de John Gast...',
        tags: [
          { name: 'C3', color: 'text-purple-400' },
          { name: 'H15', color: 'text-violet-400' },
          { name: 'H16', color: 'text-cyan-600' },
        ],
        image: screenshotAmericanProgress,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1ztpPW2qzlzTlFB4IWBDL6Xn5Y0MhAlotnh5AWbEMHhw/edit?usp=sharing',
      },
      {
        name: 'Análise gravura',
        description: 'Foi realizada uma análise da gravura do início do século XX representando aspectos da Doutrina Monroe...',
        tags: [
          { name: 'C3', color: 'text-purple-400' },
          { name: 'H15', color: 'text-violet-400' },
          { name: 'H16', color: 'text-cyan-600' },
        ],
        image: screenshotDoutrina,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1sf0i0jPNoPtsXfYcUBhzZBBSmnryEEY-IyPAr1SOWQM/edit?usp=sharing',
      },
      {
        name: 'Filme 1917',
        description: 'Análise e interpretação sobre o filme que abordou o tempo imperialista...',
        tags: [
          { name: 'C3', color: 'text-purple-400' },
          { name: 'H15', color: 'text-violet-400' },
          { name: 'H16', color: 'text-cyan-600' },
        ],
        image: screenshotFilme,
        logo: logoDocs,
        appLink: 'https://docs.google.com/document/d/1n8TBYhkAEGh4hnrzS-7mB8YjNlgkoczBc-b_Vpkn-h0/edit?usp=sharing',
      },
    ],
  },
  2: {
    title: 'Temas trabalhados no segundo trimestre de ciências humanas',
    intro: 'A sociedade brasileira na Primeira República, Da Crise de 1929 à Segunda Guerra Mundial, Industrialização no Brasil',
    projects: [
      {
        name: 'Hungry Planet: What the world eats',
        description: 'Características sociais, políticas e econômicas possíveis de observar das Filipinas através de uma foto com a os alimentos consumidos por uma família em uma semana.',
        tags: [
          { name: 'C4', color: 'text-green-400' },
          { name: 'H26', color: 'text-red-400' },
          { name: 'H27', color: 'text-yellow-400' },
        ],
        image: screenshotHungryPlanet, 
        logo: logoDocs,    
        appLink: 'https://docs.google.com/document/d/15zSwYPWubeZE7bXY6hcVHJ8cB3BPszQFS5F0jtIeJ7w/edit?usp=sharing',
      },
      {
        name: 'Regimes totalitaristas',
        description: 'Estudar os regimes totalitários da primeira metade do século XX (nazifascismo e stalinismo) envolve analisar suas características políticas, sociais, culturais, econômicas e de trabalho, bem como suas práticas de controle. Escolhi o Filme 1984 que representa aspectos sobre esses regimes e fiz uma apresentação. A apresentação deve incluir a história do filme e destacar cenas e falas que mostram as características dos regimes totalitários.',
        tags: [
          { name: 'C2', color: 'text-blue-400' },
          { name: 'H10', color: 'text-purple-400' },
          { name: 'C6', color: 'text-pink-400' },
          { name: 'H39', color: 'text-yellow-400' },
        ],
        image: screenshot1984Movie, 
        logo: logoSlides, 
        appLink: 'https://docs.google.com/presentation/d/1NBGY0sakWtcugc3KSoj8fv0ZPx9tt3MZ5JLASQcNeDQ/edit?usp=sharing',
      },
    ],
  },
  3: {
    title: 'Temas trabalhados no terceiro trimestre de ciências humanas',
    intro: 'Guerra Fria, A Ditadura Civil-Militar no Brasil',
    projects: [
      {
        name: 'A Ditadura Civil-Militar no Brasil',
        description: 'A atividade sobre a Ditadura Militar (1967-1978) teve como proposta explorar e apresentar um evento significativo desse período. Meu grupo escolheu um evento marcante e detalhamos informações sobre as pessoas envolvidas, o local dos fatos, a cronologia, e a recepção pública, complementando com mapas e fotos para facilitar o entendimento. Utilizamos documentos originais do site "Documentos Revelados", o que foi desafiador, pois exigiu análise cuidadosa e contextualização histórica. A parte que mais gostei foi trabalhar com essas fontes, pois trouxe uma compreensão mais profunda e crítica sobre o evento escolhido.',
        tags: [
          { name: 'C6', color: 'text-green-400' },
          { name: 'H39', color: 'text-red-400' },    
          { name: 'H40', color: 'text-yellow-400' },
          { name: 'C6', color: 'text-blue-400' },
          { name: 'H34', color: 'text-pink-400' },
          { name: 'H35', color: 'text-purple-400' },
        ],
        image: screenshotditadura, 
        logo: logoSlides,    
        appLink: 'https://docs.google.com/presentation/d/1JIHbpAwAahePT-IjMW4t6z6hdGCxugaJFYercV3pK0U/edit?usp=sharing',
      },
      {
        name: 'Guerra Fria',
        description: 'Na atividade sobre a Guerra Fria, criamos uma apresentação no Canva que explicava as tensões e rivalidades entre EUA e URSS. Escolhemos personagens para representar cada lado e destacamos um prédio que simboliza o medo nuclear. Também usamos uma foto sobre as ditaduras da época, um atleta que refletia a disputa ideológica, gráficos comparando dados dos dois países, e detalhes sobre um armamento da Guerra Fria. Analisar os dados e explorar o impacto dos esportes foram os pontos que mais gostei. Concluímos com imagens simbólicas de cada superpotência e um resumo das principais descobertas.',
        tags: [
          { name: 'C6', color: 'text-blue-400' },
          { name: 'H39', color: 'text-purple-400' },
          { name: 'H40', color: 'text-pink-400' },
          { name: 'C5', color: 'text-yellow-400' },  
          { name: 'H28', color: 'text-green-400' }, 
          { name: 'H30', color: 'text-red-400' }, 
          { name: 'H32', color: 'text-cyan-600' }, 
        ],
        image: screenshotguerrafria, 
        logo: logoCanva, 
        appLink: 'https://www.canva.com/design/DAGSPSjlVOo/Xigi9I80v1gNHgdLWs-iYA/edit?utm_content=DAGSPSjlVOo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
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
