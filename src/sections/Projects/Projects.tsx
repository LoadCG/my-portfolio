"use client";

import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { HiOutlineCode, HiOutlinePhotograph } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  category: "design" | "development";
}

const INITIAL_PROJECTS_COUNT = 3;

export default function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expanded, setExpanded] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "projects.projectsList.chrysalis.title",
      descriptionKey: "projects.projectsList.chrysalis.description",
      image: "/images/development/chrysalis.jpg",
      link: "https://github.com/LoadCG/Chrysalisphp2",
      category: "development",
    },
    {
      id: 2,
      titleKey: "projects.projectsList.leParfum.title",
      descriptionKey: "projects.projectsList.leParfum.description",
      image: "/images/development/leParfum.png",
      link: "https://github.com/fakersl/LandingPageIngles",
      category: "development",
    },
    {
      id: 3,
      titleKey: "projects.projectsList.sae.title",
      descriptionKey: "projects.projectsList.sae.description",
      image: "/images/design/logo_sae.png",
      link: "https://www.instagram.com/treinamentos.sae/", // Link to the Instagram page of the company
      category: "design",
    },
    {
      id: 4,
      titleKey: "projects.projectsList.portfolio.title",
      descriptionKey: "projects.projectsList.portfolio.description",
      image: "/images/development/portfolio.png",
      link: "https://github.com/LoadCG/my-portfolio",
      category: "development",
    },
    {
      id: 5,
      titleKey: "projects.projectsList.draflavia.title",
      descriptionKey: "projects.projectsList.draflavia.description",
      image: "/images/design/draflavia.png",
      link: "https://www.behance.net/gallery/236818369/Social-Media-Esttica-Cirurgia-Plastica",
      category: "design",
    },
    {
      id: 6,
      titleKey: "projects.projectsList.opampeiro.title",
      descriptionKey: "projects.projectsList.opampeiro.description",
      image: "/images/design/opampeiro.png",
      link: "https://www.behance.net/gallery/234000133/Restaurante-O-Pampeiro",
      category: "design",
    },
    {
      id: 7,
      titleKey: "projects.projectsList.setembroamarelobotica.title",
      descriptionKey: "projects.projectsList.setembroamarelobotica.description",
      image: "/images/design/setembroamarelobotica.png",
      link: "https://www.behance.net/gallery/237477329/SETEMBRO-AMARELO-ENDOMARKETING",
      category: "design",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    activeTab === 0
      ? project.category === "development"
      : project.category === "design",
  );

  const displayedProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreThanInitial = filteredProjects.length > INITIAL_PROJECTS_COUNT;

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('projects.titleWhite')}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Styled Tabs */}
        <div className="mb-12 flex justify-center gap-2">
          <button
            className={`flex items-center rounded-xl px-6 py-3 transition-all ${activeTab === 0
              ? "bg-emerald-600 text-white shadow-lg"
              : "cursor-pointer bg-gray-800 text-gray-400 hover:mr-2 hover:scale-105 hover:bg-gray-700"
              }`}
            onClick={() => { setActiveTab(0); setExpanded(false); }}
          >
            <HiOutlineCode className="mr-2 h-5 w-5" />
            {t('projects.development')}
          </button>
          <button
            className={`flex items-center rounded-xl px-6 py-3 transition-all ${activeTab === 1
              ? "bg-blue-500 text-white shadow-lg"
              : "cursor-pointer bg-gray-800 text-gray-400 hover:ml-2 hover:scale-105 hover:bg-gray-700"
              }`}
            onClick={() => { setActiveTab(1); setExpanded(false); }}
          >
            <HiOutlinePhotograph className="mr-2 h-5 w-5" />
            {t('projects.design')}
          </button>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>

        {hasMoreThanInitial && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer rounded-xl bg-gray-800 px-6 py-3 text-gray-300 transition-all hover:bg-gray-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {expanded ? t('projects.viewLess') : t('projects.viewMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { TFunction } from 'i18next';

const ProjectCard = ({ project, t }: { project: Project; t: TFunction }) => {
  const [showModal, setShowModal] = useState(false);

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  // Fechar modal ao clicar fora
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  const handleProjectClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    } else {
      if (project.category === "design") {
        setShowModal(true);
      } else {
        const confirmMessage = t('projects.devAlert');
        const confirm = window.confirm(confirmMessage);
        if (confirm) window.open("https://github.com/LoadCG", "_blank");
      }
    }
  };

  return (
    <>
      <Card
        className="group relative h-full overflow-hidden border-none bg-transparent bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 ring-0 transition-all duration-300 hover:shadow-xl hover:ring-1 hover:shadow-gray-800 hover:ring-gray-900"
        imgSrc={project.image}
        imgAlt={t(project.titleKey)}
        theme={{
          img: {
            base: "mx-auto h-48 w-full rounded-t-lg object-cover transition-transform duration-300",
          },
          root: { base: "flex h-full flex-col" },
        }}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <h5 className="mb-3 text-xl font-bold text-white">{t(project.titleKey)}</h5>
            <p className="mb-4 text-gray-400">{t(project.descriptionKey)}</p>
          </div>
          <button
            onClick={handleProjectClick}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-md"
          >
            {t('projects.viewProject')}
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </Card>

      <div
        onClick={handleBackdropClick}
        className={`fixed inset-0 z-50 bg-black/50 transition-all ${showModal ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform p-4">
          <div className="rounded-xl bg-gray-800 shadow-2xl">
            <div className="border-b border-gray-700 p-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent text-center">
                {t('projects.designAlertTitle')}
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-300 text-lg text-center">
                {t('projects.designAlert')}
              </p>

              <div className="flex justify-center gap-4">
                <button
                  className="flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 transition-all duration-300 ring-2 ring-emerald-400 hover:ring-0 hover:scale-105 cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    window.open("https://www.instagram.com/muone_mkt/", "_blank");
                    setShowModal(false);
                  }}
                >
                  <HiOutlinePhotograph className="mr-2 h-5 w-5" />
                  {t('projects.modal.openInstagram')}
                </button>

                <button
                  className="rounded-xl cursor-pointer ring-2 ring-gray-600 hover:ring-0 bg-gray-700 hover:bg-gray-600 text-gray-300 px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setShowModal(false)}
                >
                  {t('projects.modal.cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};