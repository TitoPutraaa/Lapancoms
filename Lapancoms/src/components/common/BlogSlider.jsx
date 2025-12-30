import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import BlogCardV2 from "./BlogCardV2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import blogApi from "../../api/blogApi";
import { useNavigate } from "react-router-dom";
import Load from "./Load";

export default function BlogSlider({ fromFeature }) {
  // const [select, setSelect] = useState(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // check apakah sudah diawal
  const [isEnd, setIsEnd] = useState(false); // check apakah sudah diakhir
  const [isLocked, setIsLocked] = useState(false);
  const [Blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(false);

  const loadBlogs = async () => {
    try {
      setIsLoad(true);
      const res = await blogApi.getAll();
      setBlogs(res.data.data);
      console.log("blogsld", res.data.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    } finally {
      setIsLoad(false);
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
        className="h-full w-full overflow-visible!"
        loop={false}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {Blogs.slice(0, 6).map((data) => (
          <SwiperSlide className="w-auto!">
            <div
              onClick={() =>
                navigate(`/admin/${fromFeature}/blog/${data.idBlog}`)
              }
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

      {isLoad && <Load />}
    </>
  );
}
