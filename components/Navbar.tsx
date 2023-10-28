"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-conatainer padding-container relative z-30 py-5">
      <Link href="/">
        <Image alt="logo" src="/travelbase.svg" width={125} height={115} />
      </Link>
      <ul
        className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? "hidden" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-17.5 text-gray-50 flexCenter cursor-pointer pb-0.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className={`lg:flexCenter hidden ${isMenuOpen ? "hidden" : ""}`}>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src="cross.svg" alt="cross" width={30} height={30} />
        ) : (
          <Image src="menu.svg" alt="menu" width={32} height={32} />
        )}
      </div>
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-16 left-0 w-full bg-white py-4 shadow-md">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mb-4">
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
