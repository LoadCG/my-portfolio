"use client";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import CompScrollToTop from "../../components/ScrollToTop/CompScrollToTop";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Footer } from '../../sections/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = t('documentTitle');
    }, [i18n.language, t]);

    return (
        <div className="App overflow-x-hidden bg-[#020203] font-sans text-white antialiased scroll-smooth">
            {/* Ambient Glowing Orbs */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="animate-blob absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-[10%] -right-[10%] h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[150px]" />
            </div>

            <a href="#main" className="skip-link">
                {t('a11y.skipToContent')}
            </a>

            <main id="main" tabIndex={-1} className="relative z-10 flex flex-col items-center">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>

            <Footer />
            <CompScrollToTop />
            <Analytics />
        </div>
    );
}
