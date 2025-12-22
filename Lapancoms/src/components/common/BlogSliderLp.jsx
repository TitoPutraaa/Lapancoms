import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import BlogCardV2 from "./BlogCardV2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { publicBlogApi } from "../../api/publicApi";

export default function BlogSliderLp({ fromFeature }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // check apakah sudah diawal
  const [isEnd, setIsEnd] = useState(false); // check apakah sudah diakhir
  const [isLocked, setIsLocked] = useState(false);
  const [Blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    try {
      const res = await publicBlogApi.getAll();
      setBlogs(res.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

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
        className="mb-12 h-full w-full overflow-visible! md:mb-14"
        loop={false}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {Blogs.slice(0, 10).map((data) => (
          <SwiperSlide className="w-auto!">
            <div
              onClick={() => navigate(`/${fromFeature}/blog/${data.idBlog}`)}
            >
              <BlogCardV2
                key={data.idBlog}
                idBlog={data.idBlog}
                title={data.judul}
                date={data.tglBlog}
                author={data.username}
                image={data.tamnel}
                fromFeature={fromFeature}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md: absolute right-0 bottom-0 flex gap-3">
        {/* Prev */}
        <button
          type="button"
          onClick={() => swiperRef.current.slidePrev()}
          className={`group overflow-hidden rounded-full border border-transparent p-2 transition duration-500 select-none hover:border-white hover:bg-green-800 sm:right-6 ${isLocked ? "hidden" : "block"} ${isBeginning ? "pointer-events-none cursor-not-allowed bg-gray-500 opacity-50 " : "cursor-pointer bg-green-700 opacity-100"}`}
        >
          <BsArrowLeft className="group-hover:text-secondary stroke-1 text-base text-white transition duration-400 group-hover:translate-x-0.5 md:text-xl" />
        </button>
        {/* Next */}
        <button
          type="button"
          onClick={() => swiperRef.current.slideNext()}
          className={`group overflow-hidden rounded-full border border-transparent p-2 transition duration-500 select-none hover:border-white hover:bg-green-800 sm:right-6 ${isLocked ? "hidden" : "block"} ${isEnd ? "pointer-events-none cursor-not-allowed bg-gray-500 opacity-50" : "cursor-pointer bg-green-700 opacity-100"}`}
        >
          <BsArrowRight className="group-hover:text-secondary stroke-1 text-base text-white transition duration-400 group-hover:translate-x-0.5 md:text-xl" />
        </button>
      </div>
    </>
  );
}
