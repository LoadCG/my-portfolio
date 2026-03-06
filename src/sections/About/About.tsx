import { CompHorizontalTimeline } from "../../components/HorizontalTimeline/CompHorizontalTimeline.tsx";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 sm:mt-8 md:mt-0 md:flex-row"
    >
      <div
        ref={sectionRef}
        className="magnetic-entrance w-full max-w-5xl text-center md:px-8 md:text-left"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {t('about.titlePart1')}{" "}
          <span className="block bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent sm:inline-block">
            {t('about.titlePart2')}
          </span>
        </h2>
        <p
          className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg"
          dangerouslySetInnerHTML={{ __html: t('about.content') }}
        />

        <CompHorizontalTimeline />
      </div>
    </section>
  );
}