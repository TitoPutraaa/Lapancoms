import { assets } from "../assets/assets";
import BlogCard from "../components/common/BlogCard";
import { blogData, imgData } from "../assets/DataDummy";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowRightShort,
  BsArrowUpCircle,
  BsArrowUpRight,
  BsBoxArrowInUpRight,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import Navbar from "../components/layout/Navbar";
import BlogSliderLp from "../components/common/BlogSliderLp";

export default function LandingPage() {
  const fromFeature = "lp";
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section id="home">
        <div className="relative h-dvh">
          <div className="absolute inset-0">
            <img
              src={assets.imagePublic}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-1/2 right-0 left-0 z-9 -translate-y-1/2">
            <div className="container ml-30 w-2xl px-5">
              <h1 className="mb-10 w-2xl text-white">
                It's A Big World Out There Go Explore
              </h1>
              <p className="mb-20 w-lg text-white">
                Discover new attractions and experience to match yuor interests
                and travet style
              </p>
              <button className="block rounded-full bg-emerald-600 px-8 py-2 font-medium text-white transition duration-500 group-hover:translate-x-1 md:px-8 md:py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section id="news" className="pt-18">
        <div className="px-4">
          <div className="mb-5 flex items-center justify-between">
            <div className="">
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                Latest Stories from Croatia
              </h2>
            </div>
            <div className="">
              <div className="group relative w-26 cursor-pointer overflow-hidden rounded-xl bg-white transition duration-500 md:w-29">
                <BsArrowRight className="text-accent absolute top-1/2 left-0 -translate-y-1/2 stroke-1 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                <div className="group-hover:bg-accent relative z-1 w-fit rounded-xl bg-emerald-600 px-2.5 py-1.5 text-sm text-white transition-all duration-500 group-hover:translate-x-7 md:px-3 md:text-base">
                  View All
                </div>
                <BsArrowUpRight className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 text-emerald-600 transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <BlogSliderLp fromFeature={fromFeature} />
          </div>
        </div>
      </section>

      {/*Section About*/}
      <section id="about" className="">
        <div className="container mx-auto w-full">
          <h2 className="font-semibold">About Page</h2>
          <h2 className="mb-4 text-4xl font-semibold">
            Beautiful Italy Let's travel
          </h2>
          <div className="shadow-soft mx-4 flex w-full gap-10 rounded-2xl md:mx-auto">
            <img
              src={assets.imageAbout}
              alt="promotional"
              className="h-[550px] w-full max-w-lg shrink-0 rounded-2xl md:block"
            />
            <div>
              <div className="mt-40 flex flex-col gap-35 pr-6">
                <p className="">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness. No one rejects, dislike, or avoids
                  plasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter
                  consequences that are extremly painful. Nor again is there
                  anyone who loves or pursues.
                </p>
                <div>
                  <button className="flex w-full justify-end gap-5 text-black">
                    Read More{" "}
                    <BsArrowRight className="rounded-2xl bg-green-700 text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Facility */}
      <section id="facility" className="pt-18">
        <div className="bg-amber-900 px-4">
          <div className="bg-accent mb-6">
            <h2 className="mb-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Experience OurcBest Facility
            </h2>
            <p className="mb-2 text-sm md:text-base lg:mr-210">
              Discover new attractions and experiences to match your interests.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 bg-amber-700 md:flex-row">
            <div className="shadow-soft rounded-4xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={assets.imageBlog}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-6">
                <h3 className="mt-9 mb-5 text-3xl">Our Facility</h3>
                <p className="w-sm">
                  Discover new attraction adn experiences to match your
                  interests.
                </p>
                <div className="flex justify-end px-5 pb-1">
                  <Link>
                    <div className="">
                      <div className="rounded-full bg-black text-white">
                        <BsArrowRight className="text-5xl" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 md:flex-col">
                <div className="shadow-soft w-120 rounded-2xl">
                  <div className="">
                    <img
                      src={assets.imageFacility}
                      alt=""
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="px-5">
                    <h3 className="mt-4">Our Event</h3>
                    <p className="t mt-2">
                      Discover new attraction adn experiences to match your
                      interests.
                    </p>
                  </div>
                  <div className="flex justify-end px-5 pb-1">
                    <Link>
                      <div className="">
                        <div className="bg-dark rounded-full text-white">
                          <BsArrowRight className="text-3xl" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="shadow-soft w-120 rounded-2xl">
                  <div className="">
                    <img
                      src={assets.imageFacility}
                      alt=""
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="px-5">
                    <h3 className="mt-4">Our Event</h3>
                    <p className="t mt-2">
                      Discover new attraction adn experiences to match your
                      interests.
                    </p>
                  </div>
                  <div className="flex justify-end px-5 pb-1">
                    <Link>
                      <div className="">
                        <div className="bg-dark rounded-full text-white">
                          <BsArrowRight className="text-3xl" />
                        </div>
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
      {/* <section id="maps" className="pt-18">
        <div className="relative">
          <div className="">
            <img src={assets.imageMaps} alt="" />
          </div>
          <div className="absolute top-1/2 left-25 flex -translate-y-1/2 gap-10">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0612823106626!2d115.27926447416915!3d-8.590106787203071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23e273396d515%3A0x4b3b9a132034718c!2sPoliteknik%20Negeri%20Bali%20Kampus%20Gianyar!5e0!3m2!1sid!2sid!4v1763982286469!5m2!1sid!2sid"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="">
              <img src={assets.imageAlamat} alt="" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Section Gallery */}
      <section id="gallery" className="pt-18">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-dark mb-1 text-sm font-bold uppercase md:text-lg">
              EXPLORE MORE
            </h3>
            <h2 className="text-2xl font-semibold text-gray-400 capitalize sm:text-3xl md:text-4xl">
              Our International Packages
            </h2>
          </div>
          <div className="mt-8 columns-2 gap-2 sm:columns-3 md:columns-4">
            {imgData.map((img) => (
              <div className="relative mb-2 overflow-hidden rounded-lg md:mb-2">
                <img
                  src={img.namaGambar}
                  alt="image"
                  className="w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-2 text-white opacity-0 transition-opacity duration-400 hover:opacity-100 lg:p-4">
                  <h1 className="text-sm font-medium lg:text-xl">
                    {img.title}
                  </h1>
                  <button className="group relative flex w-fit cursor-pointer items-center gap-1 pr-2 text-xs text-gray-500 hover:text-gray-400 md:text-sm">
                    View
                    <BsBoxArrowUpRight className="absolute top-1/2 left-full -translate-y-1/2 stroke-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <BsArrowUpRight className="absolute top-1/2 left-full -translate-y-1/2 stroke-1 opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:scale-80 group-hover:opacity-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Footer */}
      <section>
        <footer className="mt-10 flex flex-wrap gap-20 overflow-hidden bg-blue-950 px-6 py-16 text-[13px] font-semibold md:px-16 lg:px-24 xl:px-32">
          <div className="flex flex-wrap items-start gap-10 md:gap-[70px] xl:gap-[90px]">
            <div className="mt-5 font-semibold text-white">
              <div className="flex">
                <img src={assets.logoFooter} alt="" className="ml-15" />
                <h2 className="text-4xl">Travellian</h2>
              </div>
              <p className="ml-15">
                Copyright © Travellian 2020 All rights reserved
              </p>
            </div>

            <div className="mr-5 ml-5">
              <p className="text-xl text-white">Menu</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Facility
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Maps
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-100">
                Contact Info
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-white">
                    +123 456 789
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    info@travellian.com
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    1245, New Yourk, USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-center max-md:items-center max-md:text-center">
            <p className="text-2xl text-white">Follow us on </p>
            <div className="mt-3 flex items-center gap-4">
              <Link>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white hover:text-black"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <Link>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white hover:text-black"
                  >
                    <path
                      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter size-5 text-white hover:text-black"
                    aria-hidden="true"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"></path>
                  </svg>
                </div>
              </Link>
              <Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube size-8 text-white hover:text-black"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
