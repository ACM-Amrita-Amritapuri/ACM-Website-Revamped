import {
  HiMiniEye
} from "react-icons/hi2";
import {
  TbTargetArrow
} from "react-icons/tb";
import {
  FaHandHoldingHeart
} from "react-icons/fa";
import {
  AiOutlineSlack
} from "react-icons/ai";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: HiMiniEye,
    title: "Vision",
    description: "We envision a peaceful world where computing solves societal issues through skilled, self-motivated students.",
  },
  {
    Icon: TbTargetArrow,
    title: "Mission",
    description: "Inspire computing students to excel creatively, making a profound positive impact on society.",
  },
  {
    Icon: FaHandHoldingHeart,
    title: "Values",
    description: "We back inclusive computer science education, emphasizing teamwork and problem-solving skills.",
  }
];

const GoalsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <AiOutlineSlack
                className="group-hover:rotate-90 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GoalsSlider;
