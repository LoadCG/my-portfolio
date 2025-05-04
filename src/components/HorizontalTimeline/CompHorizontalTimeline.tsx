"use client";

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBadgeCheck,
  HiAdjustments,
} from "react-icons/hi";

export function CompHorizontalTimeline() {
  return (
    <Timeline horizontal={true} className="mx-auto mt-12 w-full max-w-4xl">
      {/* Curso Técnico */}
      <TimelineItem>
        <TimelinePoint icon={HiAcademicCap} />
        <TimelineContent>
          <TimelineTime>2022 - 2024</TimelineTime>
          <TimelineTitle>Technical Education</TimelineTitle>
          <TimelineBody>
            Immersed in software development fundamentals: Java development
            (OOP, GUI, and PostgreSQL), responsive web interface creation (HTML,
            CSS, JavaScript, Bootstrap, and Tailwind CSS), and database modeling
            with PHP and MySQL.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Projeto TCC */}
      <TimelineItem>
        <TimelinePoint icon={HiBadgeCheck} />
        <TimelineContent>
          <TimelineTime>2024</TimelineTime>
          <TimelineTitle>Chrysalis E-commerce</TimelineTitle>
          <TimelineBody>
            Developed complete PHP/MySQL store with cart system and admin panel,
            styled with TailwindCSS. My first full-cycle project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Design */}
      <TimelineItem>
        <TimelinePoint icon={HiAdjustments} />
        <TimelineContent>
          <TimelineTime>2017-Present</TimelineTime>
          <TimelineTitle>Visual Design Journey</TimelineTitle>
          <TimelineBody>
            Experienced in designing impactful flyers for artists and social
            media, demonstrating a keen eye for graphic design. Actively
            building a portfolio in UI/UX design.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Atual */}
      <TimelineItem>
        <TimelinePoint icon={HiArrowRight} />
        <TimelineContent>
          <TimelineTime>Now</TimelineTime>
          <TimelineTitle>Current Focus</TimelineTitle>
          <TimelineBody>
            Deepening React knowledge, studying Java for system fundamentals, and
            exploring Python for future data projects. Seeking my first
            professional experience in development.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
