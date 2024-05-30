import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/neeraja.jpg",
    name: "R Neeraja Anand",
    position: "Alumni (2020-2024)",
    message:
      "I believe ACM shapes and prepares anyone enthusiastic to learn more and try out different technologies. Joining here had taken the static concepts learnt in classrooms and visualize something beyond papers and walls. Notably, the people networking and organization eases the transition from a student to a working professional.  Joining ACM is definitely a no-brainer!",
  },
  {
    image: "/sudhin.jpg",
    name: "Sudhin S",
    position: "Alumni (2020-2024)",
    message:
      "ACM is a perfect space for nurturing skills and developing bondings among your fellow mates. It was really exciting and fun to be part of the team as a member and the lead for the competitive programming team. Wishing all the best for the team to conquer more heights and spread love and happiness.",
  },
  {
    image: "/aby.jpg",
    name: "Aby Stalin",
    position: "Alumni (2020-2024)",
    message:
      "I played a key role in reviving the ACM Student Chapter at Amritapuri, unifying smaller college clubs under the ACM banner. We successfully organized the first ICPC event post-COVID, which was a significant achievement. This experience enhanced my managerial and technical skills, and I made lasting friendships. Being part of this chapter was immensely rewarding, teaching me valuable lessons in leadership and teamwork.",
  },
  {
    image: "/Dhanush.jpg",
    name: "Dhanush Krishna R",
    position: "Alumni (2020-2024)",
    message:
      "Great place where you can learn, collaborate, and build a strong network of amazing people.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
