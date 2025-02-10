"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { RocketLaunchIcon, BookOpenIcon, BugAntIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Tandem Train",
    icon: RocketLaunchIcon,
    description: "This tool is used to take assessments securely and efficiently. It is a platform for conducting online exams and assessments.",
  },
  {
    title: "Waggle",
    icon: BookOpenIcon,
    description: "A tool used for documentation and collaboration. It is a platform for creating and sharing documents and files.",
  },
  {
    title: "Beehive",
    icon: BugAntIcon,
    description: "This tool is used for task management and tracking. It is a platform for creating and managing tasks and projects.",
  },
];

const opensource = [
  {
    title: "Python Basics",
    icon: RocketLaunchIcon,
    link: "https://github.com/L3-Squad/python-basics",
    description: "This repository contains basic Python programs and concepts. It is a resource for learning and practicing Python programming.",
  },
  {
    title: "Java Basics",
    icon: BookOpenIcon,
    link:"https://github.com/L3-Squad/java-basics",
    description: "This repository contains basic Java programs and concepts. It is a resource for learning and practicing Java programming.",
  },
  {
    title: "Java Master",
    icon: BugAntIcon,
    link:"https://github.com/l3squad-com/java-master",
    description: "This repository is used to take quick quizzes on Java and check knowledge about Java.",
  },
  {
    title: "React Chef",
    icon: BugAntIcon,
    link:"https://github.com/web-slate/react-chef",
    description: "React-Chef is a Node Module that helps you create React boilerplate apps instantly, prescribing best practices.",
  },
  {
    title: "Transactify",
    icon: BookOpenIcon,
    link:"https://github.com/web-slate/transactify",
    description: "This repository contains a Python module for predicting transaction categorization.",
  },
  {
    title: "GitAI",
    icon: RocketLaunchIcon,
    link:"https://github.com/web-slate/gitai",
    description: "GitAI is an ML project aimed at assisting developers in learning and using Git commands effectively.",
  },
];

export const Projects = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <SectionTitle preTitle="L3 Squad Projects" title="L3 Community Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 py-8 rounded-2xl shadow-2xl dark:bg-trueGray-800"
              whileHover={{ scale: 1.05 }}
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
        <SectionTitle title="L3 Open Source Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {opensource.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 py-8 rounded-2xl shadow-2xl dark:bg-trueGray-800"
              whileHover={{ scale: 1.05 }}
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
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold hover:underline"
                >
                  {project.title}
                </a>
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
