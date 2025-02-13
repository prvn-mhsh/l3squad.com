'use client';
import React, { useRef } from "react";
import { Container } from "@/components/Container";
import { motion, useInView } from "framer-motion";

export const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true }); // Correct alternative

  const ContainerVariants = {
    hidden: { opacity: 0, y: 100, scaleX: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
        when: "beforeChildren",
        y: { duration: 0.5 },
        scaleX: { duration: 0.5, delay: 0.5 },
      },
    },
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={ContainerVariants}
        className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-customBlue px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl"
      >
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to work with our community?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Visit our GitHub and start to work with us.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/L3-Squad"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-customBlue bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            L3Squad GitHub
          </a>
        </div>
      </motion.div>
    </Container>
  );
};
