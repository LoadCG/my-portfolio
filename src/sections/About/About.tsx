import { CompHorizontalTimeline } from "../../components/HorizontalTimeline/CompHorizontalTimeline.tsx";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 sm:py-32 overflow-hidden"
    >
      <div
        ref={sectionRef}
        className={`container mx-auto max-w-6xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            {t('about.titlePart1')}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t('about.titlePart2')}
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

          {/* Bio Card (Full Width) */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md transition-all hover:border-emerald-500/30">
            <div className="relative z-10">
              <p
                className="text-lg leading-relaxed text-slate-400"
                dangerouslySetInnerHTML={{ __html: t('about.content') }}
              />
            </div>
          </div>

          {/* Timeline Card (Full Width Bottom) */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md transition-all hover:border-white/20">
            <h3 className="text-2xl font-bold text-white mb-10">
              Jornada Profissional
            </h3>
            <CompHorizontalTimeline />
          </div>

        </div>
      </div>
    </section>
  );
}