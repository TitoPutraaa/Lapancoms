import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";

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
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
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
              className={`shadow-soft hover:shadow-primary hover:border-primary w- h-full w-full rounded-lg border-2 bg-white ${select === index ? "shadow-primary border-primary " : errTmplt ? "border-danger " : "border-transparent"}`}
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
        className="absolute top-1/2 -right-8 z-10 -translate-y-1/2 sm:-right-9 lg:-right-11"
      >
        <i class="fa-solid fa-circle-arrow-right text-primary hover:text-primary/80 cursor-pointer text-3xl lg:text-4xl"></i>
      </button>
    </>
  );
}
