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
  HiAdjustments,
} from "react-icons/hi";
import { useTranslation } from 'react-i18next';

export function CompHorizontalTimeline() {
  const { t } = useTranslation();

  return (
    <Timeline horizontal={true} className="mx-auto mt-12 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Curso Técnico */}
      <TimelineItem className="cursor-default">
        <TimelinePoint icon={HiAcademicCap} className="hidden sm:flex mb-8 mx-auto sm:mx-0" />
        <div className="hover:scale-115 transition-all duration-400 ease-in-out inline-flex sm:hidden justify-center border-8 border-white rounded-full bg-white">
          <HiAcademicCap className="bg-blue-200 rounded-full border-6 border-blue-200 text-blue-700 h-6 w-6" />
        </div>
        <TimelineContent className="padding-t-4">
          <TimelineTime>{t('about.timeline.technical.time')}</TimelineTime>
          <TimelineTitle className="text-gray-400 dark:text-gray-400 hover:text-gray-300 transition-colors duration-300">
            {t('about.timeline.technical.title')}
          </TimelineTitle>
          <TimelineBody className="hover:text-gray-400 transition-colors duration-300">
            {t('about.timeline.technical.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Design */}
      <TimelineItem className="cursor-default">
        <TimelinePoint icon={HiAdjustments} className="hidden sm:flex mb-8 mx-auto sm:mx-0" />
        <div className="hover:scale-115 transition-all duration-400 ease-in-out inline-flex sm:hidden justify-center border-8 border-white rounded-full bg-white">
          <HiAdjustments className="bg-blue-200 rounded-full border-6 border-blue-200 text-blue-700 h-6 w-6" />
        </div>
        <TimelineContent className="padding-t-4">
          <TimelineTime>{t('about.timeline.design.time')}</TimelineTime>
          <TimelineTitle className="text-gray-400 dark:text-gray-400 hover:text-gray-300 transition-colors duration-300">{t('about.timeline.design.title')}</TimelineTitle>
          <TimelineBody className="hover:text-gray-400 transition-colors duration-300">
            {t('about.timeline.design.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Atual */}
      <TimelineItem className="cursor-default">
        <TimelinePoint icon={HiArrowRight} className="hidden sm:flex mb-8 mx-auto sm:mx-0" />
        <div className="hover:scale-115 transition-all duration-400 ease-in-out inline-flex sm:hidden justify-center border-8 border-white rounded-full bg-white">
          <HiArrowRight className="bg-blue-200 rounded-full border-6 border-blue-200 text-blue-700 h-6 w-6" />
        </div>
        <TimelineContent className="padding-t-4">
          <TimelineTime>{t('about.timeline.current.time')}</TimelineTime>
          <TimelineTitle className="text-gray-400 dark:text-gray-400 hover:text-gray-300 transition-colors duration-300">{t('about.timeline.current.title')}</TimelineTitle>
          <TimelineBody className="hover:text-gray-400 transition-colors duration-300">
            {t('about.timeline.current.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
