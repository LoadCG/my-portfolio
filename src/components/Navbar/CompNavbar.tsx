import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { forwardRef } from 'react';

const CompNavbar = forwardRef<HTMLDivElement>((_, ref) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Cauan Gabriel da Silva Resende Nascimento - CV.pdf";
    link.click();
  };

  return (
    <div ref={ref}>
      <Navbar fluid className="bg-gray-800 border-gray-700">
        <NavbarBrand href="#">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Cauan Gabriel
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button
            onClick={handleDownloadCV}
            color="light"
            outline={true}
            size="lg"
            className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium cursor-pointer text-white bg-blue-500 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            pill={true}
          >
            <HiDownload className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active className="text-white hover:text-emerald-400">
            Home
          </NavbarLink>
          <NavbarLink href="#about" className="text-white hover:text-emerald-400">
            About
          </NavbarLink>
          {/* <NavbarLink href="#" className="text-white hover:text-emerald-400">
            Services
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:text-emerald-400">
            Pricing
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:text-emerald-400">
            Contact
          </NavbarLink> */}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
});

CompNavbar.displayName = 'CompNavbar';

export default CompNavbar;