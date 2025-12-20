import { assets } from "../assets/assets";
import BlogCard from "../components/common/BlogCard";
import { blogData } from "../assets/DataDummy";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight, BsArrowUpCircle, BsArrowUpRight } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTextWidth,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function LandingPage() {
  const menu = ["home", "news", "about", "facility", "maps", "gallery"];
  const handleClickMenu = (id) => {
    document.getElementById(id)?.scrollIntoView();
  };
  return (
    <div>
      {/* Navbar */}
      {/* <div className="fixed z-50 w-full">
        <nav className="">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={assets.logo} className="h-10" alt="" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Travelog
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="mt-4 flex flex-col gap-5 rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Facility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Maps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}

      {/* Hero Section */}
      <div className="relative h-120 sm:h-150 md:h-dvh">
        <div className="absolute inset-0">
          <img
            src={assets.imagePublic}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute lg:px-30 px-6 bottom-15 md:bottom-1/2 md:translate-y-1/2 sm:bottom-30 right-0 left-0 z-9 ">
          <div className="container  mx-auto">
            <h1 className="mb-5 lg:w-170 text-4xl font-semibold md:text-5xl text-white">
              It's A Big World Out There Go Explore
            </h1>
            <p className="mb-20 lg:w-120 text-sm text-white md:text-base">
              Discover new attractions and experience to match yuor interests
              and travet style
            </p>
            <div>
               <div className="group relative w-26 cursor-pointer overflow-hidden rounded-xl bg-white transition duration-500 md:w-29">
                <BsArrowRight className="text-accent absolute top-1/2 left-0 -translate-y-1/2 stroke-1 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                <div className="group-hover:bg-accent relative z-1 w-fit rounded-xl bg-emerald-600 px-2.5 py-1.5 text-sm text-white transition-all duration-500 group-hover:translate-x-7 md:px-3 md:text-base">
                  Learn More
                </div>
                <BsArrowUpRight className="absolute top-1/2 right-2 ml-2 h-4 w-4 -translate-y-1/2 stroke-1 text-emerald-600 transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Blog
        <section>
          <div className="flex justify-between">
          <div className="">
            <h2 className="m-10 text-4xl font-semibold">
              Latest Stories from Croatia
            </h2>
          </div>
          <div className=" mt-15 mr-7">
              <button className="rounded-full bg-emerald-600 hover:bg-emerald-700 font-medium text-white md:px-8 md:py-3 transition">
                View All
              </button>
          </div>
          </div>
          <div className="flex justify-center">
          <div className="mx-2 flex">
            {blogData.slice(0, 5  ).map((data) => (
              <div className="mx-3 mb-10">
                <BlogCard
                  key={data.title}
                  title={data.title}
                  date={data.date}
                  author={data.author}
                />
              </div>
            ))}
          </div>
          </div> 
          <div className="flex justify-end gap-3 mr-5">
            <div className=" bg-gray-600 p-2 rounded-full w-fit" >
              <BsArrowLeft className="text-2xl"/>
            </div>
            <div className="bg-green-700 p-2 rounded-full w-fit  " >
              <BsArrowRight className="text-2xl"/>
            </div>
          </div>
          
        </section> */}

      {/* Section About */}
      <section className="pt-18 " id="about">
        <div className="container mx-auto w-full px-4">
          <h2 className="mb-1 font-semibold md:text-lg">About Page</h2>
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Beautiful Italy Let's travel
          </h3>
          <div className="shadow-soft flex w-full flex-col gap-5 rounded-2xl sm:items-stretch md:flex-row">
            <div className="h-90 w-full shrink-0 self-stretch overflow-hidden rounded-2xl object-cover md:h-auto md:w-80 lg:w-100 xl:w-110">
              <img
                src={assets.imageAbout}
                alt="promotional"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center px-6 text-sm sm:mr-4 sm:py-5 md:text-base">
              <div>
                <p className="mb-4 line-clamp-7">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness. No one rejects, dislike, or avoids
                  plasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter
                  consequences that are extremly painful. Nor again is there
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam corrupti esse exercitationem minus expedita. Id
                  accusantium placeat voluptates sit velit vero quos,
                  perspiciatis inventore, tenetur quisquam illum? Voluptatibus,
                  optio qui! Architecto error nam porro expedita, aperiam totam
                  excepturi illo corrupti, minus, impedit nobis. Pariatur nihil
                  consequuntur odio, iure ad incidunt cum saepe, exercitationem
                  provident explicabo nostrum vitae officiis deserunt
                  necessitatibus.
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

      {/* Section Facility
      <section className="mb-10">
        <div className=" px-10">
          <div className="mt-10">
            <h2 className="mb-3 text-4xl font-semibold">
              Experience OurcBest Facility
            </h2>
            <p className="mb-2 mr-210">
              Discover new attractions and experiences to match your interests.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="shadow-soft rounded-4xl ">
              <img src={assets.imageBlog} alt="" className=" w-170 rounded-4xl" />
              <div className="ml-6">
                <h3 className="mb-5  mt-9 text-3xl">Our Facility</h3>
                <p className="w-sm">
                  Discover new attraction adn experiences to match your
                  interests.
                </p>
                    <div className=" flex justify-end px-5 pb-1">
                  <Link>
                    <div className="">
                       <div className=" text-white bg-black rounded-full ">
                          <BsArrowRight className="text-5xl"/>
                       </div>
                    </div>
                  </Link>
                  </div>
              </div>
            </div>
            <div >           
              <div className=" gap-5 flex flex-col ">
                <div className=" shadow-soft w-120 rounded-2xl">
                  <div className="">
                  <img src={assets.imageFacility} alt="" className="w-full h-full object-cover rounded-2xl "/>
                  </div>
                  <div className="px-5">
                  <h3 className=" mt-4  ">Our Event</h3>
                  <p className="mt-2  t">
                    Discover new attraction adn experiences to match your
                    interests.
                  </p>
                  </div>
                  <div className=" flex justify-end px-5 pb-1">
                  <Link>
                    <div className="">
                       <div className=" text-white bg-dark rounded-full ">
                        <BsArrowRight className="text-3xl"/>
                       </div>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className=" shadow-soft w-120 rounded-2xl">
                  <div className="">
                  <img src={assets.imageFacility} alt="" className="w-full h-full object-cover rounded-2xl "/>
                  </div>
                  <div className="px-5">
                  <h3 className=" mt-4  ">Our Event</h3>
                  <p className="mt-2  t">
                    Discover new attraction adn experiences to match your
                    interests.
                  </p>
                  </div>
                  <div className=" flex justify-end px-5 pb-1">
                  <Link>
                    <div className="">
                       <div className=" text-white  bg-dark rounded-full ">
                          <BsArrowRight className="text-3xl"/>
                       </div>
                    </div>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section Maps */}
      <section>
        <div className="relative">
          <div className="h-170 w-full">
            <img
              src={assets.imageMaps}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex-col gap-10">
            <div className="mb-7 flex flex-col gap-2 px-4 pt-18 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Come and Visit us
              </h2>
              <p className="text-sm md:text-base">
                discover new attractions and experiences to match your
                interests.
              </p>
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
      {/* <section> 
        <div>
        <h1 className="text-center">
          EXPLORE MORE
        </h1>
        <h4 className="mx-auto text-center text-3xl font-semibold">
          Our International Packages
        </h4>
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop"
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h1 className="text-xl font-medium">Image Title</h1>
              <a
                href="#"
                className="flex items-center gap-1 text-sm text-white/70"
              >
                Show More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 1.625H11.375V4.875"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.41602 7.58333L11.3743 1.625"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section> */}

      {/* Section Footer */}
      <footer className="bg-blue-950 px-10 lg:px-15">
        <div className="flex xl:flex-nowrap flex-wrap items-start gap-10 py-16 xl:justify-around xl:container mx-auto ">
          <div className="flex w-full flex-col gap-10 md:flex-row lg:gap-15 ">
            <div className="flex w-full flex-col items-center gap-1 md:items-start text-white md:w-fit">
              <div className="flex gap-2">
                <img src={assets.logoFooter} alt="" className="size-8" />
                <h2 className="text-3xl md:text-4xl font-semibold">Travellian</h2>
              </div>
              <p className="text-sm sm:w-100 md:w-auto  text-gray-200 lg:text-base xl:w-130 md:text-left text-center">
                Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Itaque, iste.
              </p>
            </div>

            <div className="flex w-full justify-around md:w-fit md:gap-17 lg:gap-30 xl:gap-35">
              <div className=" ">
                <p className="text-lg md:text-xl font-medium text-white">Menu</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {menu.map((id) => (
                    <li key={id}>
                      <button 
                      onClick={()=>{handleClickMenu(id)}}
                      className="cursor-pointer text-gray-200 first-letter:uppercase hover:text-gray-5 lg:text-base">
                        {id}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-lg md:text-xl text-white font-medium">Contact Info</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-200 lg:text-base">
                  <li>+123 456 789</li>
                  <li>info@travellian.com</li>
                  <li>1245, New Yourk, USA</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-2 md:gap-3 xl:w-fit ">
            <p className="text-lg md:text-xl text-white font-medium">Follow us on </p>
            <div className="flex gap-4">
              <a
                href=""
                className="text-gray-400 md:text-xl lg:text-2xl transition-colors duration-500 hover:text-gray-100"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="text-gray-400 md:text-xl lg:text-2xl   transition-colors duration-500 hover:text-gray-100"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="text-gray-400 md:text-xl lg:text-2xl  transition-colors duration-500 hover:text-gray-100"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                className="text-gray-400 md:text-xl lg:text-2xl transition-colors duration-500 hover:text-gray-100"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="h-auto w-full border-t border-white text-center xl:mx-auto xl:container ">
          <p className="py-4 text-xs text-gray-200 lg:text-sm">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
