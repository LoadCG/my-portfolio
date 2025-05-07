"use client";

import { useState } from "react";
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

export default function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);

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
      titleKey: "projects.projectsList.kiDelicia.title",
      descriptionKey: "projects.projectsList.kiDelicia.description",
      image: "/images/design/restauranteKiDelicia.jpg",
      link: "",
      category: "design",
    },
    {
      id: 4,
      titleKey: "projects.projectsList.portfolio.title",
      descriptionKey: "projects.projectsList.portfolio.description",
      image: "/images/development/portfolio.jpg",
      link: "https://github.com/LoadCG/my-portfolio",
      category: "development",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    activeTab === 0
      ? project.category === "development"
      : project.category === "design",
  );

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
            onClick={() => setActiveTab(0)}
          >
            <HiOutlineCode className="mr-2 h-5 w-5" />
            {t('projects.development')}
          </button>
          <button
            className={`flex items-center rounded-xl px-6 py-3 transition-all ${activeTab === 1
                ? "bg-blue-500 text-white shadow-lg"
                : "cursor-pointer bg-gray-800 text-gray-400 hover:ml-2 hover:scale-105 hover:bg-gray-700"
              }`}
            onClick={() => setActiveTab(1)}
          >
            <HiOutlinePhotograph className="mr-2 h-5 w-5" />
            {t('projects.design')}
          </button>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { TFunction } from 'i18next';

const ProjectCard = ({ project, t }: { project: Project; t: TFunction }) => {
  const handleProjectClick = () => {
    if (!project.link || project.link === "") {
      const confirmMessage =
        project.category === "design"
          ? t('projects.designAlert')
          : t('projects.devAlert');

      const redirectUrl =
        project.category === "design"
          ? "https://www.instagram.com/design_cg.srn/"
          : "https://github.com/LoadCG";

      const confirm = window.confirm(confirmMessage);
      if (confirm) {
        window.open(redirectUrl, "_blank");
      }
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <Card
      className="group relative h-full overflow-hidden border-none bg-transparent bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 ring-0 transition-all duration-300 hover:shadow-xl hover:ring-1 hover:shadow-gray-800 hover:ring-gray-900"
      imgSrc={project.image}
      imgAlt={t(project.titleKey)}
      theme={{
        img: {
          base: "mx-auto h-48 rounded-t-lg object-cover transition-transform duration-300",
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
  );
};