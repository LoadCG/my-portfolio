"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

export default function Courses() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) el.classList.add("visible");
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const coursesList = [
        {
            key: "uiux",
            color: "from-purple-500/20 to-blue-500/20",
            border: "hover:border-purple-500/50"
        },
        {
            key: "react",
            color: "from-blue-500/20 to-cyan-500/20",
            border: "hover:border-blue-500/50"
        },
        {
            key: "ignite",
            color: "from-green-500/20 to-emerald-500/20",
            border: "hover:border-green-500/50"
        },
        {
            key: "typography",
            color: "from-orange-500/20 to-red-500/20",
            border: "hover:border-orange-500/50"
        },
    ];

    return (
        <section id="courses" className="min-h-screen w-full px-4 py-20">
            <div ref={sectionRef} className="fade-in mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        {t("courses.titleWhite")}{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            {t("courses.title")}
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {t("courses.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {coursesList.map((course, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${course.border}`}
                        >
                            {/* Decorative gradient background */}
                            <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${course.color}`} />

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                                        <HiOutlineAcademicCap className="h-8 w-8" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <HiOutlineClock className="h-4 w-4" />
                                        <span>{t(`courses.list.${course.key}.duration`)}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">
                                        {t(`courses.list.${course.key}.title`)}
                                    </h3>
                                    <div className="mt-2 flex items-center gap-2 text-gray-400">
                                        <HiOutlineCalendar className="h-4 w-4" />
                                        <span className="font-medium">{t(`courses.list.${course.key}.school`)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent bar */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
