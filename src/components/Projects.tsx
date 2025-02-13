"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { RocketLaunchIcon, BookOpenIcon, BugAntIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Tandem Train",
    icon: RocketLaunchIcon,
    description: "This tool provides videos and content about L3Squad. Interns interested in joining L3Squad can use it to learn more about the organization and complete an assessment before onboarding. It is similar to Moodle, offering a structured learning experience.",
  },
  {
    title: "Waggle",
    icon: BookOpenIcon,
    description: "A powerful tool designed for documentation and seamless collaboration. It enables teams to create, organize, and share information efficiently. Similar to Confluence, it helps streamline knowledge management and enhance teamwork. New insights, updates, and issues are documented in this tool to improve workflow.",
  },
  {
    title: "Beehive",
    icon: BugAntIcon,
    description: "This tool serves as a platform for creating, organizing, and managing tasks and projects, ensuring smooth collaboration and productivity. It includes tasks assigned to community members, with points awarded for each task to encourage active participation and timely completion. Similar to Taiga, it offers a structured workflow that helps teams track progress, assign responsibilities, and stay focused on their goals.",
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
    link: "https://github.com/L3-Squad/java-basics",
    description: "This repository contains basic Java programs and concepts. It is a resource for learning and practicing Java programming.",
  },
  {
    title: "Java Master",
    icon: BugAntIcon,
    link: "https://github.com/l3squad-com/java-master",
    description: "This repository is used to take quick quizzes on Java and check knowledge about Java.",
  },
  {
    title: "React Chef",
    icon: BugAntIcon,
    link: "https://github.com/web-slate/react-chef",
    description: "React-Chef is a Node Module that helps you create React boilerplate apps instantly, prescribing best practices.",
  },
  {
    title: "Transactify",
    icon: BookOpenIcon,
    link: "https://github.com/web-slate/transactify",
    description: "This repository contains a Python module for predicting transaction categorization.",
  },
  {
    title: "GitAI",
    icon: RocketLaunchIcon,
    link: "https://github.com/web-slate/gitai",
    description: "GitAI is an ML project aimed at assisting developers in learning and using Git commands effectively.",
  },
];

export const Projects = () => {
  return (
    <Container>
      <SectionTitle preTitle="What do we do?" title="L3 Community Products">Note: It is for educational purposes only and not for commercial use. </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between w-full max-w-sm mx-auto bg-gray-100 px-6 py-6 rounded-2xl shadow-xl dark:bg-trueGray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-start space-x-3">
              {project.icon && (
                <div className="flex items-center justify-center bg-customBlue rounded-md w-10 h-10">
                  <project.icon className="w-6 h-6 text-indigo-50" />
                </div>
              )}
              <div>
                <div className="text-2xl font-semibold">{project.title}</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <SectionTitle title="L3 Open Source Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {opensource.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between w-full max-w-sm mx-auto bg-gray-100 px-6 py-6 rounded-2xl shadow-xl dark:bg-trueGray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center space-x-3">
              {project.icon && (
                <div className="flex items-center justify-center bg-customBlue rounded-md w-10 h-10">
                  <project.icon className="w-6 h-6 text-indigo-50" />
                </div>
              )}
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold hover:underline"
              >
                {project.title}
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container >
  );
};
