"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { RocketLaunchIcon, BookOpenIcon, BugAntIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Tandem Train",
    icon: RocketLaunchIcon,
    description: "This tool is used to take assessment securely and efficiently. It is a platform for conducting online exams and assessments."
  },
  {
    title: "Waggle",
    icon: BookOpenIcon,
    description: "A tool used for documentation and collaboration. It is a platform for creating and sharing documents and files."
  },
  {
    title: "Beehive",
    icon: BugAntIcon,
    description: "This tool is used for task management and tracking. It is a platform for creating and managing tasks and projects."
  },
];

export const Projects = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <SectionTitle
          preTitle="L3 Squad Projects"
          title="L3 Community Projects"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 py-14 rounded-2xl shadow-2xl transform transition-transform dark:bg-trueGray-800"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-3">
                {project.icon && (
                  <div className="flex items-center justify-center bg-customBlue rounded-md w-11 h-11">
                    <project.icon className="w-7 h-7 text-indigo-50" />
                  </div>
                )}
                <div className="text-3xl font-bold">{project.title}</div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};
