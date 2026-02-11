import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { forwardRef } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const CompNavbar = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref} role="navigation" aria-label={t('a11y.mainNav')}>
      <Navbar fluid className="bg-transparent bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
        <NavbarBrand href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Cauan Gabriel
          </span>
        </NavbarBrand>

        <div className="flex md:order-2 gap-4">
          <LanguageSwitcher />
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLink href="#" active className="text-white hover:text-emerald-400 cursor-default">
            {t('nav.home')}
          </NavbarLink>
          <NavbarLink href="#about" className="text-white hover:text-emerald-400">
            {t('nav.about')}
          </NavbarLink>
          <NavbarLink href="#projects" className="text-white hover:text-emerald-400">
            {t('nav.projects')}
          </NavbarLink>
          {/* <NavbarLink href="#pricing" className="text-white hover:text-emerald-400">
            {t('nav.pricing')}
          </NavbarLink> */}
          <NavbarLink href="#contact" className="text-white hover:text-emerald-400">
            {t('nav.contact')}
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
});

CompNavbar.displayName = 'CompNavbar';

export default CompNavbar;