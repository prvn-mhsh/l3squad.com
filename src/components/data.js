import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Life long Learners: 'L3 SQUAD' ",
  desc: "Join our community to unlock a world of free, lifelong learning opportunities. With access to expert mentorship, collaborative projects, and a wide range of educational resources, you’ll be supported in your personal and professional growth.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Build a Strong Network",
      desc: "Connect with fellow learners, professionals, and experts, expanding your career and learning opportunities.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Ongoing Support and Resources",
      desc: "Stay up-to-date with new materials, events, and opportunities that are consistently added to help you grow.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Completely Free",
      desc: "No hidden fees—everything in the community is completely free for all members, ensuring accessible education for all.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Community Benefits Here",
  desc: "For College Students: We provide mentorship, internships, skill-building workshops, and networking events to prepare you for your dream career.  For Working Professionals: Access upskilling programs, leadership training, career counseling, and industry connections to excel in your field." ,
  
  image: benefitTwoImg,
  bullets: [
    {
      title: "Collaborative Learning",
      desc: "Share knowledge and learn from others' experiences to enhance your skills.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Goal Setting and Accountability",
      desc: "Set clear career goals with community support to stay on track.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Exposure to Opportunities",
      desc: "Discover job openings, internships, and collaborative projects within the network.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
