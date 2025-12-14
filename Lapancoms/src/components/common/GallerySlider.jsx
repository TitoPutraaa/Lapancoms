import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GalleryCard from "./GalleryCard";
import GalleryView from "./GalleryView";
import galleryApi from "../../api/galleryApi";

export default function GallerySlider({ fromFeature }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // check apakah card sudah diawal
  const [isEnd, setIsEnd] = useState(false); // check apakah card sudah diakhir
  const [isLocked, setIsLocked] = useState(false);
  const [viewGallery, setViewGallery] = useState(false);
  const [idGallery, setIdGallery] = useState(null);
  const [gallerys, setGallerys] = useState([]);

  const loadGallery = async () => {
    try {
      const fetchGallerys = await galleryApi.getAll();
      setGallerys(fetchGallerys.data.data);
      console.log("all", fetchGallerys.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const handleSelect = (id) => {
    setIdGallery(id);
    setViewGallery(true);
    console.log("id selec", id);
  };

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
        {gallerys?.slice(0, 8).map((data) => (
          <SwiperSlide className="w-auto!">
            <div onClick={() => handleSelect(data)}>
              <GalleryCard
                key={data.idGambar}
                idGambar={data.idGambar}
                title={data.judulGambar}
                author={data.username}
                image={data.namaGambar}
                fromFeature={fromFeature}
              />
            </div>
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

      {viewGallery && (
        <GalleryView
          setViewGallery={setViewGallery}
          fromFeature={fromFeature}
          data={idGallery}
        />
      )}
    </>
  );
}
