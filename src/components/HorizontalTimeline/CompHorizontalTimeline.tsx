"use client";

import {
  HiAcademicCap,
  HiArrowRight,
  HiAdjustments,
} from "react-icons/hi";
import { useTranslation } from 'react-i18next';

export function CompHorizontalTimeline() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-12 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="relative border-l border-gray-700 sm:flex sm:justify-between sm:border-t sm:border-l-0">

        {/* Item 1: Técnico */}
        <div className="mb-10 ml-4 sm:mb-0 sm:ml-0 sm:flex-1 sm:pr-4">
          <div className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 ring-8 ring-gray-900 sm:relative sm:-top-3 sm:-left-3 sm:mx-auto sm:mb-6 sm:h-6 sm:w-6">
            <HiAcademicCap className="hidden h-4 w-4 text-white sm:block" />
          </div>
          <div className="mt-2 sm:mt-0 sm:text-center md:text-left">
            <time className="mb-1 block text-sm leading-none font-normal text-gray-500">
              {t('about.timeline.technical.time')}
            </time>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              {t('about.timeline.technical.title')}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400 transition-colors duration-300 hover:text-gray-300">
              {t('about.timeline.technical.body')}
            </p>
          </div>
        </div>

        {/* Item 2: Design */}
        <div className="mb-10 ml-4 sm:mb-0 sm:ml-0 sm:flex-1 sm:px-4">
          <div className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 ring-8 ring-gray-900 sm:relative sm:-top-3 sm:-left-3 sm:mx-auto sm:mb-6 sm:h-6 sm:w-6">
            <HiAdjustments className="hidden h-4 w-4 text-white sm:block" />
          </div>
          <div className="mt-2 sm:mt-0 sm:text-center md:text-left">
            <time className="mb-1 block text-sm leading-none font-normal text-gray-500">
              {t('about.timeline.design.time')}
            </time>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              {t('about.timeline.design.title')}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400 transition-colors duration-300 hover:text-gray-300">
              {t('about.timeline.design.body')}
            </p>
          </div>
        </div>

        {/* Item 3: Current */}
        <div className="mb-10 ml-4 sm:mb-0 sm:ml-0 sm:flex-1 sm:pl-4">
          <div className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 ring-8 ring-gray-900 sm:relative sm:-top-3 sm:-left-3 sm:mx-auto sm:mb-6 sm:h-6 sm:w-6">
            <HiArrowRight className="hidden h-4 w-4 text-white sm:block" />
          </div>
          <div className="mt-2 sm:mt-0 sm:text-center md:text-left">
            <time className="mb-1 block text-sm leading-none font-normal text-gray-500">
              {t('about.timeline.current.time')}
            </time>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              {t('about.timeline.current.title')}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400 transition-colors duration-300 hover:text-gray-300">
              {t('about.timeline.current.body')}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
