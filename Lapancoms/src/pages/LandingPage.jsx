import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import BlogSliderLp from "../components/common/BlogSliderLp";
import {
  BsArrowRight,
  BsArrowUpRight,
  BsBoxArrowUpRight,
  BsChevronRight,
} from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { publicGalleryApi, publicLP } from "../api/publicApi";
import GalleryView from "../components/common/GalleryView";

export default function LandingPage() {
  const fromFeature = "lp";
  const menu = ["home", "news", "about", "facility", "maps", "gallery"];
  const [viewGallery, setViewGallery] = useState(false);
  const [idGallery, setIdGallery] = useState(null);
  const [lpData, setLpData] = useState({});
  const [gallerys, setGallerys] = useState([]);

  const handleSelect = (id) => {
    setIdGallery(id);
    setViewGallery(true);
    console.log("id selec", id);
  };

  const handleClickMenu = (id) => {
    document.getElementById(id)?.scrollIntoView();
  };

  const loadLP = async () => {
    try {
      const res = await publicLP.getAll();
      setLpData(res.data.data);
      console.log("lp", res.data.data[0]);
    } catch (error) {
      console.log("lp", error);
    }
  };

  const loadGallery = async () => {
    try {
      const res = await publicGalleryApi.getAll();
      setGallerys(res.data.data);
      console.log("gal", res.data.data);
    } catch (error) {
      console.log("gal lp", error);
    }
  };

  useEffect(() => {
    loadLP();
    loadGallery();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <div className="relative h-120 sm:h-150 md:h-dvh">
          <div className="absolute inset-0">
            <img
              src={assets.imagePublic}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-15 left-0 z-9 px-6 sm:bottom-30 md:bottom-1/2 md:translate-y-1/2 lg:px-30">
            <div className="container mx-auto">
              <h1 className="mb-5 text-4xl font-semibold text-white md:text-5xl lg:w-170">
                {lpData[0]?.home_h1}
              </h1>
              <p className="mb-20 text-sm text-white md:text-base lg:w-120">
                {lpData[0]?.home_p1}
              </p>
              <div onClick={() => handleClickMenu("news")}>
                <div className="group relative w-31 cursor-pointer overflow-hidden rounded-xl bg-white md:w-35">
                  <FaPaperPlane className="text-accent absolute top-1/2 left-0 -translate-y-1/2 stroke-1 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                  <div className="group-hover:bg-accent relative z-1 w-fit rounded-xl bg-emerald-600 px-2.5 py-1.5 text-sm text-white transition-all duration-500 group-hover:translate-x-7 md:px-3 md:text-base">
                    Learn More
                  </div>
                  <BsArrowUpRight className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 text-emerald-600 transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section id="news" className="pt-18">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                BLOGS
              </h2>
            </div>
            <Link to={"../allBlogs"} state={{ fromFeature: fromFeature }}>
              <div className="group relative w-26 cursor-pointer overflow-hidden rounded-xl bg-white transition duration-500 md:w-29">
                <BsArrowRight className="text-accent absolute top-1/2 left-0 -translate-y-1/2 stroke-1 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                <div className="group-hover:bg-accent relative z-1 w-fit rounded-xl bg-emerald-600 px-2.5 py-1.5 text-sm text-white transition-all duration-500 group-hover:translate-x-7 md:px-3 md:text-base">
                  View All
                </div>
                <BsArrowUpRight className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 text-emerald-600 transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <BlogSliderLp fromFeature={fromFeature} />
          </div>
        </div>
      </section>

      {/* Section About */}
      <section className="pt-18" id="about">
        <div className="container mx-auto w-full px-4 lg:px-6">
          <h2 className="mb-1 font-semibold md:text-lg">About Page</h2>
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            {lpData[0]?.about_h1}
          </h3>
          <div className="shadow-soft flex w-full flex-col rounded-2xl sm:items-stretch md:flex-row md:gap-5">
            <div className="h-90 w-full shrink-0 self-stretch overflow-hidden rounded-2xl object-cover md:h-auto md:w-80 lg:w-100 xl:w-110">
              <img
                src={assets.imageAbout}
                alt="promotional"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-around gap-10 px-6 py-5 text-sm md:mr-4 md:text-base">
              <p className="line-clamp-7 lg:line-clamp-9">
                {lpData[0]?.about_p1}
              </p>
              <div className="flex justify-end">
                <Link>
                  <div className="group hover:text-dark relative flex w-fit justify-end gap-3 text-base font-medium text-gray-800 transition-colors duration-300">
                    <span className="relative mr-6">
                      Read More
                      <span className="bg-dark absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"></span>
                    </span>
                    <BsChevronRight className="absolute top-1/2 right-1 -translate-y-1/2 stroke-1 transition-all duration-500 group-hover:-right-1 group-hover:opacity-0" />
                    <BsArrowRight className="absolute top-1/2 right-2 -translate-y-1/2 stroke-1 opacity-0 transition-all duration-500 group-hover:right-0 group-hover:opacity-100" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Facility */}
      <section id="facility" className="pt-18">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              Experience OurcBest Facility
            </h2>
            <p className="mb-2 text-sm md:text-base">
              Discover new attractions and experiences to match your interests.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shadow-soft rounded-xl md:flex-1 md:self-start">
              <div className="group h-70 overflow-hidden rounded-lg sm:h-90 md:h-80 md:rounded-xl lg:h-110 xl:h-125">
                <img
                  src={assets.imageBlog}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                  Our Facility
                </h3>
                <p className="mb-2 text-sm md:mb-4 md:text-base">
                  Discover new attraction adn experiences to match your
                  interests.
                </p>
                <div className="flex justify-end">
                  <Link>
                    <div className="group cursor-pointer overflow-hidden rounded-full border border-transparent bg-green-700 p-2 transition duration-500 hover:scale-95 hover:bg-green-800 sm:right-6">
                      <BsArrowRight className="group-hover:text-secondary stroke-1 text-base text-white transition duration-400 group-hover:translate-x-0.5 md:text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md flex flex-col gap-4 sm:flex-row md:w-80 md:shrink md:flex-col lg:w-100">
              <div className="shadow-soft flex-1 overflow-hidden rounded-xl sm:self-start">
                <div className="group h-70 overflow-hidden rounded-lg sm:h-50 md:rounded-xl">
                  <img
                    src={assets.imageFacility}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3 className="md:text-text-2xl mb-2 text-xl font-semibold">
                    Our Event
                  </h3>
                  <p className="mb-2 text-sm md:mb-4 md:text-base">
                    Discover new attraction adn experiences to match your
                    interests.
                  </p>
                  <div className="hrink-0 flex justify-end">
                    <Link>
                      <div className="group cursor-pointer overflow-hidden rounded-full border border-transparent bg-green-700 p-2 transition duration-400 hover:bg-green-800 sm:right-6">
                        <BsArrowRight className="group-hover:text-secondary stroke-1 text-base text-white transition duration-400 group-hover:translate-x-0.5 md:text-xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shadow-soft flex-1 overflow-hidden rounded-xl sm:self-start">
                <div className="group h-70 overflow-hidden rounded-lg sm:h-50 md:rounded-xl">
                  <img
                    src={assets.imageFacility}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                    Accomodation
                  </h3>
                  <p className="mb-2 text-sm md:mb-4 md:text-base">
                    discover new attractions and experiences to match your
                    interests.
                  </p>
                  <div className="flex justify-end">
                    <Link>
                      <div className="group cursor-pointer overflow-hidden rounded-full border border-transparent bg-green-700 p-2 transition duration-500 hover:bg-green-800 sm:right-6">
                        <BsArrowRight className="group-hover:text-secondary stroke-1 text-base text-white transition duration-400 group-hover:translate-x-0.5 md:text-xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Maps */}
      <section id="maps">
        <div className="relative">
          <div className="h-170 w-full">
            <img
              src={assets.imageMaps}
              alt=""
              className="h-full w-full object-cover object-bottom"
            />
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex-col gap-10">
            <div className="mb-7 flex flex-col gap-2 px-4 pt-18 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {lpData[0]?.map_h1}
              </h2>
              <p className="text-sm md:text-base">{lpData[0]?.map_p1}</p>
            </div>
            <div className="h-110">
              <iframe
                className="h-full w-full object-cover"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0612823106626!2d115.27926447416915!3d-8.590106787203071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23e273396d515%3A0x4b3b9a132034718c!2sPoliteknik%20Negeri%20Bali%20Kampus%20Gianyar!5e0!3m2!1sid!2sid!4v1763982286469!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Gallery */}
      <section id="gallery" className="pt-18">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h3 className="text-dark mb-1 text-sm font-bold uppercase md:text-lg">
              EXPLORE MORE
            </h3>
            <h2 className="text-2xl font-semibold text-gray-400 capitalize sm:text-3xl md:text-4xl">
              Our International Packages
            </h2>
          </div>
          <div className="mt-8 columns-2 gap-2 sm:columns-3 md:columns-4">
            {gallerys?.map((img, index) => (
              <div onClick={() => handleSelect(img)}>
                <div className="relative mb-2 overflow-hidden rounded-lg md:mb-2">
                  <img
                    src={`http://127.0.0.1:8000/storage/galery/${gallerys[index]?.namaGambar}`}
                    alt="image"
                    className="w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-2 text-white opacity-0 transition-opacity duration-400 hover:opacity-100 lg:p-4">
                    <h1 className="text-sm font-medium lg:text-xl">
                      {img.judulGambar}
                    </h1>
                    <button className="group relative flex w-fit cursor-pointer items-center gap-1 pr-2 text-xs text-gray-500 hover:text-gray-400 md:text-sm">
                      View
                      <BsBoxArrowUpRight className="absolute top-1/2 left-full -translate-y-1/2 stroke-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <BsArrowUpRight className="absolute top-1/2 left-full -translate-y-1/2 stroke-1 opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:scale-80 group-hover:opacity-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Footer */}
      <footer className="mt-18 bg-blue-950 px-10 lg:px-15">
        <div className="mx-auto flex flex-wrap items-start gap-10 py-16 xl:container xl:flex-nowrap xl:justify-around">
          <div className="flex w-full flex-col gap-10 md:flex-row lg:gap-15">
            <div className="flex w-full flex-col items-center gap-1 text-white md:w-fit md:items-start">
              <div className="flex gap-2">
                <img src={assets.logoFooter} alt="" className="size-8" />
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Travellian
                </h2>
              </div>
              <p className="text-center text-sm text-gray-200 sm:w-100 md:w-auto md:text-left lg:text-base xl:w-130">
                {lpData[0]?.footer_p1}
              </p>
            </div>

            <div className="flex w-full justify-around md:w-fit md:gap-17 lg:gap-30 xl:gap-35">
              <div className=" ">
                <p className="text-lg font-medium text-white md:text-xl">
                  Menu
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {menu.map((id) => (
                    <li key={id}>
                      <button
                        onClick={() => {
                          handleClickMenu(id);
                        }}
                        className="hover:text-gray-5 cursor-pointer text-gray-200 first-letter:uppercase lg:text-base"
                      >
                        {id}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-lg font-medium text-white md:text-xl">
                  Contact Info
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-200 lg:text-base">
                  <li>+123 456 789</li>
                  <li>info@travellian.com</li>
                  <li>1245, New Yourk, USA</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-2 md:gap-3 xl:w-fit">
            <p className="text-lg font-medium text-white md:text-xl">
              Follow us on{" "}
            </p>
            <div className="flex gap-4">
              <a
                href={lpData[0]?.facebook}
                target="_blank"
                className="text-gray-400 transition-colors duration-500 hover:text-gray-100 md:text-xl lg:text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href={lpData[0]?.instagram}
                target="_blank"
                className="text-gray-400 transition-colors duration-500 hover:text-gray-100 md:text-xl lg:text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href={lpData[0]?.youtube}
                target="_blank"
                className="text-gray-400 transition-colors duration-500 hover:text-gray-100 md:text-xl lg:text-2xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="h-auto w-full border-t border-white text-center xl:container xl:mx-auto">
          <p className="py-4 text-xs text-gray-200 lg:text-sm">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>
      </footer>
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
