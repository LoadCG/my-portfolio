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
    <Timeline horizontal={true} className="mx-auto mt-12 w-full max-w-4xl">
      {/* Curso Técnico */}
      <TimelineItem>
        <TimelinePoint icon={HiAcademicCap} />
        <TimelineContent>
          <TimelineTime>{t('about.timeline.technical.time')}</TimelineTime>
          <TimelineTitle className="text-gray-200 dark:text-gray-200">{t('about.timeline.technical.title')}</TimelineTitle>
          <TimelineBody>
            {t('about.timeline.technical.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Design */}
      <TimelineItem>
        <TimelinePoint icon={HiAdjustments} />
        <TimelineContent>
          <TimelineTime>{t('about.timeline.design.time')}</TimelineTime>
          <TimelineTitle className="text-gray-200 dark:text-gray-200">{t('about.timeline.design.title')}</TimelineTitle>
          <TimelineBody>
            {t('about.timeline.design.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Atual */}
      <TimelineItem>
        <TimelinePoint icon={HiArrowRight} />
        <TimelineContent>
          <TimelineTime>{t('about.timeline.current.time')}</TimelineTime>
          <TimelineTitle className="text-gray-200 dark:text-gray-200">{t('about.timeline.current.title')}</TimelineTitle>
          <TimelineBody>
            {t('about.timeline.current.body')}
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
