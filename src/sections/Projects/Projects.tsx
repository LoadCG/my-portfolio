"use client";

import { useState } from "react";
import { Card } from "flowbite-react";
import { HiOutlineCode, HiOutlinePhotograph } from "react-icons/hi";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: "design" | "development";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chrysalis E-commerce",
    description:
      "E-commerce Chrysalis is a platform for buying and selling products made with HTML, CSS, Javascript, Tailwind CSS, and PHP with MySQL.",
    image: "/images/development/chrysalis.jpg", // Caminho corrigido
    link: "https://github.com/LoadCG/Chrysalisphp2",
    category: "development",
  },
  {
    id: 2,
    title: "Le Parfum Page",
    description:
      "Virtual perfumery (Le Parfum) landing page. Built by me and three classmates for an English/IT project. Elegant, informative, user-friendly.",
    image: "/images/development/leParfum.png", // Caminho corrigido
    link: "https://github.com/fakersl/LandingPageIngles",
    category: "development",
  },
  {
    id: 3,
    title: "Ki Delicia Restaurant",
    description:
      "Ki Delicia is a restaurant from Minas Gerais that offers a variety of dishes. The logo were designed by me as a personal project for fun.",
    image: "/images/design/restauranteKiDelicia.jpg", // Caminho corrigido
    link: "",
    category: "design",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const filteredProjects = projects.filter((project) =>
    activeTab === 0
      ? project.category === "development"
      : project.category === "design",
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Browse through selected works that represent my dual expertise in
            building digital experiences and crafting compelling visual
            narratives.
          </p>
        </div>

        {/* Styled Tabs */}
        <div className="mb-12 flex justify-center gap-2">
          <button
            className={`flex items-center rounded-xl px-6 py-3 transition-all ${
              activeTab === 0
                ? "bg-emerald-600 text-white shadow-lg"
                : "cursor-pointer bg-gray-800 text-gray-400 hover:mr-2 hover:scale-105 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <HiOutlineCode className="mr-2 h-5 w-5" />
            Development
          </button>
          <button
            className={`flex items-center rounded-xl px-6 py-3 transition-all ${
              activeTab === 1
                ? "bg-blue-500 text-white shadow-lg"
                : "cursor-pointer bg-gray-800 text-gray-400 hover:ml-2 hover:scale-105 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <HiOutlinePhotograph className="mr-2 h-5 w-5" />
            Graphic Design
          </button>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  const handleProjectClick = () => {
    if (!project.link || project.link === "") {
      const confirmMessage =
        project.category === "design"
          ? "Sorry, this design project has not been published separately yet. Would you like to see my Instagram?"
          : "Sorry, this development project has not been published separately yet. Would you like to see my GitHub?";

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
      imgAlt={project.title}
      theme={{
        img: {
          base: "mx-auto h-48 rounded-t-lg object-cover transition-transform duration-300",
        },
        root: { base: "flex h-full flex-col" },
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h5 className="mb-3 text-xl font-bold text-white">{project.title}</h5>
          <p className="mb-4 text-gray-400">{project.description}</p>
        </div>
        <button
          onClick={handleProjectClick}
          className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-md"
        >
          View Project
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
