import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }} // Enable navigation
        modules={[Pagination, Navigation]} // Include Navigation module
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, imageI) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={imageI}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={500}
                      height={300}
                    />

                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-[#120e24] to-[#00a4e6] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      aria-hidden
                    />

                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <Link
                        href={image.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                      >
                        {/* title part 1 */}
                        <div className="delay-100">GITHUB</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          LINK
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          <BsArrowRight aria-hidden />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons with inline styles */}
      <div
  className="swiper-button-prev"
  style={{
    left: "-50px",
    color: "#be2188", // Setting the color
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    zIndex: 10,
    transition: "transform 0.3s ease",
    transformOrigin: "center center", // Add transform-origin property
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Set background color
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.2)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}
>
</div>
<div
  className="swiper-button-next"
  style={{
    right: "-50px",
    color: "#be2188", // Setting the color
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    zIndex: 10,
    transition: "transform 0.3s ease",
    transformOrigin: "center center", // Add transform-origin property
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Set background color
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.2)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}
>
</div>




    </div>
  );
};

export default WorkSlider;
