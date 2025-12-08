import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import BlogCardV2 from "./BlogCardV2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GalleryCard from "./GalleryCard";

export default function GallerySlider({ imgData, fromFeature }) {
  // const [select, setSelect] = useState(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // check apakah sudah diawal
  const [isEnd, setIsEnd] = useState(false); // check apakah sudah diakhir
  const [isLocked, setIsLocked] = useState(false);

  const checkEdgePosition = (swiper) => {
    setIsBeginning(swiper.activeIndex === 0);
    setIsEnd(swiper.activeIndex === swiper.snapGrid.length - 1);
    setIsLocked(swiper.isLocked);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onInit={(swiper) => checkEdgePosition(swiper)}
        onSlideChange={(swiper) => checkEdgePosition(swiper)}
        onSlideChangeTransitionEnd={(swiper) => checkEdgePosition(swiper)}
        onResize={(swiper) => checkEdgePosition(swiper)}
        direction="horizontal"
        className="h-full w-full flex-row overflow-visible!"
        loop={false}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {imgData.slice(0, 8).map((data) => (
          <SwiperSlide className="w-auto!">
            <GalleryCard
              key={data.idGambar}
              idGambar={data.idGambar}
              title={data.title}
              author={data.author}
              image={data.namaGambar}
              fromFeature={fromFeature}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev */}
      <button
        type="button"
        onClick={() => swiperRef.current.slidePrev()}
        className={`bg-secondary border-primary/50 hover:bg-primary group absolute top-1/2 left-3 z-10 -translate-y-1/2 overflow-hidden rounded-full border p-2 transition duration-500 hover:border-white sm:left-6 ${isLocked ? "hidden" : "block"} ${isBeginning ? "pointer-events-none cursor-not-allowed opacity-0" : "opacity-100"}`}
      >
        <BsArrowLeft className="text-primary group-hover:text-secondary stroke-1 text-sm transition duration-400 group-hover:-translate-x-0.5" />
      </button>
      {/* Next */}
      <button
        type="button"
        onClick={() => swiperRef.current.slideNext()}
        className={`bg-secondary border-primary/50 hover:bg-primary group absolute top-1/2 right-3 z-10 -translate-y-1/2 overflow-hidden rounded-full border p-2 transition duration-500 hover:border-white sm:right-6 ${isLocked ? "hidden" : "block"} ${isEnd ? "pointer-events-none cursor-not-allowed opacity-0" : "opacity-100"}`}
      >
        <BsArrowRight className="text-primary group-hover:text-secondary stroke-1 text-sm transition duration-400 group-hover:translate-x-0.5" />
      </button>
    </>
  );
}
