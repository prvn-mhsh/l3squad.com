import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { SectionTitle } from "@/components/SectionTitle";
// import tt from "../../public/img/tt.png";
// import waggle from "../../public/img/waggle.png";
import { RocketLaunchIcon, BookOpenIcon, BugAntIcon } from "@heroicons/react/24/solid";

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

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white ml-4">
              Life Long Learners
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 ml-5">
              L3Squad stands for Life Long Learners and its a non-profit organization also a community of passionate professionals who are committed to lifelong learning and sharing knowledge.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm8hipu_JXi_YWzW4h5Dzof46XDPjaYyMq9A02U3S_SSC4pQ/viewform"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md mt-4 ml-5">
                Apply for Internship
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width="616"
              height="617"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
        <SectionTitle
        preTitle="L3 Squad Projects"
        title="L3 Community Projects"
      />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                <div className="flex items-center space-x-3">
                  {project.icon && (
                    <div className="flex items-center justify-center bg-indigo-500 rounded-md w-11 h-11">
                      <project.icon className="w-7 h-7 text-indigo-50" />
                    </div>
                  )}
                  <div className="text-3xl font-bold">{project.title}</div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </Container>
    </>
  );
};
