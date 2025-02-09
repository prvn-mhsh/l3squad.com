"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme } = useTheme();

  const sections = [
    { name: "L3squad", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Benefits", id: "benefits" },
    { name: "Video", id: "video" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50">
        <div className="container flex items-center justify-between p-8 mx-auto">
          <div className="flex items-center">
          <Link href="/" className="flex items-center">
              <Image
                src={theme === "dark" ? "/img/L3SQUAD_White.png" : "/img/L3SQUAD_Dark.png"}
                width={100}
                height={100}
                alt="L3 Squad Logo"
                className="w-24"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 60,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`px-4 py-2 text-lg rounded-md uppercase ${
                    activeSection === section.id
                      ? "text-customBlue font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-customBlue"
                  }`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Theme Switch */}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};
