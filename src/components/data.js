import {
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon,
  ServerStackIcon,
  CheckCircleIcon
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
      desc:  "Connect with talented students and other professionals, expanding their network.",
      icon: <GlobeAsiaAustraliaIcon />,
    },
    {
      title: "Leadership Development",
      desc: "Enhance soft skills such as communication, mentoring, and leadership.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Industry Recognition",
      desc: "Builds credibility and reputation as a thought leader in the community.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Knowledge Sharing",
      desc: " Opportunity to mentor and share knowledge, reinforcing their own understanding.",
      icon: <ServerStackIcon/>,
    },

  ],
};

const benefitTwo = {
  title: "Our Community Benefits Here",
  desc: "For College Students: We provide mentorship, internships, skill-building workshops, and networking events to prepare you for your dream career.  For Working Professionals: Access upskilling programs, leadership training, career counseling, and industry connections to excel in your field." ,
  
  image: benefitTwoImg,
  bullets: [
    {
      title: "Real-world Experience",
      desc: "Gain practical knowledge by working on real projects alongside professionals.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Networking Opportunities",
      desc: "Build connections in the software industry, increasing job prospects.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Skill Enhancement",
      desc: "Improve coding, problem-solving, and collaboration skills.",
      icon: <SunIcon />,
    },

    {
      title:"Soft Skill Development",
      desc: " Enhance communication, teamwork, and adaptability skills.",
      icon: <CheckCircleIcon/>,
    },
  ],
};


export {benefitOne, benefitTwo};
