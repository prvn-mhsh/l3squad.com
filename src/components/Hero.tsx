'use client'
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { motion } from "framer-motion";
import Link from "next/link";
export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
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
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <motion.h1 initial={{scale:0.8,opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.5}}} className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white ml-4">
              Life Long Learners
            </motion.h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 ml-5 mb-7">
            L3 stands for Life Long Learners. It is a non-profit organization dedicated to training students, helping professionals gain knowledge, and building a community for continuous learning and growth.
            </p>

            <div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm8hipu_JXi_YWzW4h5Dzof46XDPjaYyMq9A02U3S_SSC4pQ/viewform"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-customBlue rounded-md mt-5 ml-5">
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
