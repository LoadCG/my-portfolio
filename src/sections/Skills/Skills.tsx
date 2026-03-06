"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiPhp,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiFigma,
    SiMysql,
    SiGit
} from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Skills() {
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

    const skillCategories = [
        {
            title: t("skills.categories.frontend"),
            skills: [
                { name: t("skills.list.react"), icon: SiReact, color: "text-blue-400" },
                { name: t("skills.list.typescript"), icon: SiTypescript, color: "text-blue-500" },
                { name: t("skills.list.tailwind"), icon: SiTailwindcss, color: "text-cyan-400" },
                { name: t("skills.list.javascript"), icon: SiJavascript, color: "text-yellow-400" },
                { name: t("skills.list.html"), icon: SiHtml5, color: "text-orange-500" },
            ],
        },
        {
            title: t("skills.categories.design"),
            skills: [
                { name: t("skills.list.photoshop"), icon: SiAdobephotoshop, color: "text-blue-600" },
                { name: t("skills.list.illustrator"), icon: SiAdobeillustrator, color: "text-orange-600" },
                { name: t("skills.list.figma"), icon: SiFigma, color: "text-purple-400" },
                { name: t("skills.list.branding"), icon: HiOutlineLightBulb, color: "text-emerald-400" },
            ],
        },
        {
            title: t("skills.categories.tools"),
            skills: [
                { name: t("skills.list.php"), icon: SiPhp, color: "text-indigo-400" },
                { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
                { name: t("skills.list.git"), icon: SiGit, color: "text-orange-600" },
            ],
        },
    ];

    return (
        <section id="skills" className="min-h-screen w-full px-4 py-20">
            <div ref={sectionRef} className="fade-in mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        {t("skills.titleWhite")}{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            {t("skills.title")}
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {t("skills.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-xl font-bold text-white/90 underline decoration-emerald-500/50 underline-offset-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/5"
                                    >
                                        <div className={`text-3xl ${skill.color} transition-transform group-hover:scale-110`}>
                                            <skill.icon aria-hidden="true" />
                                        </div>
                                        <span className="text-lg font-medium text-gray-300 group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
