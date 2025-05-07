import { CompHorizontalTimeline } from "../../components/HorizontalTimeline/CompHorizontalTimeline.tsx";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-8 md:flex-row"
    >
      <div className="w-full max-w-5xl text-center md:px-8 md:text-left">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {t('about.titlePart1')}{" "}
          <span className="bg-transparent bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            {t('about.titlePart2')}
          </span>
          ?
        </h1>
        <p 
          className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg"
          dangerouslySetInnerHTML={{ __html: t('about.content') }}
        />

        <CompHorizontalTimeline />
      </div>
    </section>
  );
}