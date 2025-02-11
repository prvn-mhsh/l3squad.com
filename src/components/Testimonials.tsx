"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Container } from "@/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import praveenImg from "../../public/img/praveen.png";
import VenkatImg from "../../public/img/Venkat.png";
import YuvarajImg from "../../public/img/Yuvaraj.png";
import KarthiImg from "../../public/img/karthikeyan.png";
import SabarinathanImg from "../../public/img/sabari.png";

export const Testimonials = () => {
  const testimonialData = [
    {
      text: "I transformed my life from zero to hero. I have learned a lot from this community, which has helped shape me into a skilled engineer.",
      image: praveenImg,
      name: "Praveen",
      title: "Full Stack Intern",
      bgColor: "bg-red-50",
      linkedin: "https://www.linkedin.com/in/prvnmhsh/",
    },
    {
      text: "This community has been my go-to place for learning and inspiration. I am glad to be part of this team.",
      image: VenkatImg,
      name: "Venkat",
      title: "Working @ META",
      bgColor: "bg-green-50",
      linkedin: "https://www.linkedin.com/in/venkatraman-r-ai/",
    },
    {
      text: "The mentorship and resources available here are unmatched. I've gained valuable insights into data analysis and machine learning.",
      image: YuvarajImg,
      name: "Yuvaraj",
      title: "Frontend Developer",
      bgColor: "bg-blue-50",
      linkedin: "https://www.linkedin.com/in/yuvarajravi2/",
    },
    {
      text: "It's not just about learning; it's about contributing and giving back. The open discussions and coding challenges push me to become a better developer.",
      image: KarthiImg,
      name: "Karthikeyan",
      title: "DevOps Lead",
      bgColor: "bg-yellow-50",
      linkedin: "https://www.linkedin.com/in/karthikeyan",
    },
    {
      text: "The community's focus on sharing knowledge has made me a better engineer. I feel empowered to explore new technologies and collaborate with brilliant minds.",
      image: SabarinathanImg,
      name: "Sabarinathan",
      title: "Marketing Automation Engineer",
      bgColor: "bg-purple-50",
      linkedin: "https://www.linkedin.com/in/sabarinathan-k-51784260/",
    },
  ];

  const swiperRef = useRef<any>(null);

  return (
    <Container>
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Link href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                <div
                  className={`flex flex-col justify-between w-full px-14 py-14 rounded-2xl ${testimonial.bgColor} dark:bg-trueGray-800 min-h-[350px] h-full`}
                >
                  <p className="text-2xl leading-normal min-h-[100px]">{testimonial.text}</p>
                  <Avatar
                    image={testimonial.image}
                    name={testimonial.name}
                    title={testimonial.title}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
          <button
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10">
          <button
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width={56}
          height={56}
          alt="Avatar"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
