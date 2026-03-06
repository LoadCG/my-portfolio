"use client";

import { useEffect, useState, useRef } from "react";
import { HiOutlineCode, HiOutlinePhotograph } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

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
  const sectionRef = useRef<HTMLDivElement>(null);

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
      link: "https://www.instagram.com/treinamentos.sae/",
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

  const devCount = projects.filter(p => p.category === 'development').length;
  const designCount = projects.filter(p => p.category === 'design').length;

  const filteredProjects = projects.filter((project) =>
    activeTab === 0 ? project.category === "development" : project.category === "design"
  );

  const displayedProjects = expanded ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreThanInitial = filteredProjects.length > INITIAL_PROJECTS_COUNT;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen w-full px-4 py-20">
      <div ref={sectionRef} className="magnetic-entrance mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest w-fit mb-6">
            <HiOutlineCode className="w-3 h-3" />
            {t('projects.titleWhite')}
          </div>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
            {t('projects.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mb-16 flex flex-col justify-center gap-2 sm:flex-row sm:gap-0">
          <div className="relative flex w-full flex-col gap-2 rounded-3xl bg-white/5 p-2 backdrop-blur-md sm:w-auto sm:flex-row sm:gap-0 sm:rounded-full border border-white/10">
            {/* Sliding Indicator */}
            <div
              className={`absolute top-2 bottom-2 hidden transition-all duration-500 cubic-bezier(0.23,1,0.32,1) sm:block ${activeTab === 0
                ? 'left-2 w-[calc(50%-8px)] rounded-full bg-emerald-500/10 border border-emerald-500/20'
                : 'left-[calc(50%+4px)] w-[calc(50%-8px)] rounded-full bg-blue-500/10 border border-blue-500/20'
                }`}
            />

            <button
              onClick={() => { setActiveTab(0); setExpanded(false); }}
              data-cursor="hover"
              data-cursor-color="emerald"
              className={`relative z-10 flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold transition-all sm:w-auto sm:rounded-full ${activeTab === 0 ? "text-white sm:bg-transparent bg-emerald-600" : "text-gray-400 hover:text-white"
                }`}
            >
              <HiOutlineCode className="mr-2 text-xl" />
              {t('projects.development')}
              <span className={`ml-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${activeTab === 0 ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                }`}>
                {devCount}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab(1); setExpanded(false); }}
              data-cursor="hover"
              data-cursor-color="blue"
              className={`relative z-10 flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold transition-all sm:w-auto sm:rounded-full ${activeTab === 1 ? "text-white sm:bg-transparent bg-blue-500" : "text-gray-400 hover:text-white"
                }`}
            >
              <HiOutlinePhotograph className="mr-2 text-xl" />
              {t('projects.design')}
              <span className={`ml-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${activeTab === 1 ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                }`}>
                {designCount}
              </span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} t={t} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreThanInitial && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-emerald-400 backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {expanded ? t('projects.viewLess') : t('projects.viewMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const ProjectCard = ({ project, t, index }: { project: Project; t: TFunction; index: number }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

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
      <div
        style={{ transitionDelay: `${index * 150}ms` }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10"
      >
        <div className="relative h-56 w-full overflow-hidden bg-[#07070a]">
          <img
            src={project.image}
            alt={`Banner do projeto ${t(project.titleKey)}`}
            loading="lazy"
            className="block h-full w-full object-cover transition-opacity duration-700 ease-out will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
            {project.category}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-8">
          <div>
            <h5 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">
              {t(project.titleKey)}
            </h5>
            <p className="mb-6 text-sm leading-relaxed text-slate-400 line-clamp-3">
              {t(project.descriptionKey)}
            </p>
          </div>

          <button
            onClick={handleProjectClick}
            aria-label={`${t('projects.viewProject')} ${t(project.titleKey)}`}
            className="group/btn relative mt-auto inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-black active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('projects.viewProject')}
              <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        onClick={handleBackdropClick}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 ${showModal ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className={`w-full max-w-md transform p-4 transition-transform duration-300 ${showModal ? 'scale-100' : 'scale-95'}`}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
            <div className="border-b border-white/10 p-6 text-center">
              <h3 className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
                {t('projects.designAlertTitle')}
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-center text-lg text-gray-300">
                {t('projects.designAlert')}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:bg-emerald-500 hover:shadow-lg"
                  onClick={() => {
                    window.open("https://www.instagram.com/muone_mkt/", "_blank");
                    setShowModal(false);
                  }}
                >
                  <HiOutlinePhotograph className="mr-2 h-5 w-5" />
                  {t('projects.modal.openInstagram')}
                </button>
                <button
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-medium text-gray-300 transition-all hover:scale-105 hover:bg-white/20 hover:text-white"
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