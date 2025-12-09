import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function TempleSlider({ images, onSelect, errTmplt }) {
  const [select, setSelect] = useState(null);
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        direction="horizontal"
        slidesPerView={4}
        className="h-full w-full overflow-visible!"
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div
              onClick={() => {
                setSelect(index);
                onSelect(item.value);
              }}
              className={`hover:shadow-primary shadow-soft hover:border-primary h-full w-full cursor-pointer rounded-lg border-2 bg-white ${select === index ? "shadow-primary border-primary " : errTmplt ? "border-danger " : "border-transparent"}`}
            >
              <img
                className="h-full w-full object-cover"
                src={item.src}
                alt={`img - ${index}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => swiperRef.current.slideNext()}
        className="bg-secondary border-primary/50 hover:bg-primary group absolute top-1/2 -right-8 z-10 -translate-y-1/2 overflow-hidden rounded-full border p-2 transition duration-500 hover:border-white lg:hidden"
      >
        <BsArrowRight className="text-primary group-hover:text-secondary stroke-1 text-sm transition duration-400" />
      </button>
    </>
  );
}
