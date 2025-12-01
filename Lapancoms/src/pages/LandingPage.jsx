import { assets } from "../assets/assets";
import BlogCard from "../components/common/BlogCard";
import { blogData } from "../assets/DataDummy";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed z-50 w-full">
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
      </div>

      {/* Hero Section */}
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

      {/* Section Blog */}
      <section>
        <div className="">
          <h2 className="m-10 text-4xl font-semibold">
            Latest Stories from Croatia
          </h2>
        </div>
        <div className="mx-2 flex">
          {blogData.slice(0, 3).map((data) => (
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
      </section>

      {/*Section About*/}
      <section>
        <div className="container mx-auto w-full">
          <h2 className="font-semibold">About Page</h2>
          <h2 className="mb-4 text-4xl font-semibold">
            Beautiful Italy Let's travel
          </h2>
          <div className="shadow-soft mx-4 flex w-full gap-10 rounded-xl md:mx-auto">
            <img
              src={assets.imageAbout}
              alt="promotional"
              className="h-[550px] w-full max-w-lg shrink-0 rounded-l-xl md:block"
            />
            <div>
              <div className="mt-40 pr-6">
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
                <div className="flex justify-end">
                  <button className="mt-40 bg-amber-50 px-6 py-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Facility */}
      <section className="mb-10">
        <div className=" px-10">
          <div className="mt-10">
            <h2 className="mb-3 text-4xl font-semibold">
              Experience OurcBest Facility
            </h2>
            <p className="mb-2 ">
              Discover new attractions and experiences to match your interests.
            </p>
          </div>
          <div className="flex justify-between ">
            <div className="shadow-soft ">
              <img src={assets.imageBlog} alt="" className=" w-170" />
              <div className="ml-6">
                <h3 className="mb-5  mt-9 text-3xl">Our Facility</h3>
                <p className="w-sm">
                  Discover new attraction adn experiences to match your
                  interests.
                </p>
                    <div className=" flex justify-end px-5 pb-1">
                  <Link>
                    <div className="">
                       <div className="h-10 w-10 bg-dark rounded-full ">
                          -
                       </div>
                    </div>
                  </Link>
                  </div>
              </div>
            </div>

            <div >
            
              <div className=" gap-5 flex flex-col ">
                <div className=" shadow-soft w-120 ">
                  <div className="">
                  <img src={assets.imageFacility} alt="" className="w-full h-full object-cover "/>
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
                       <div className="h-6 w-6 bg-dark rounded-full ">
                          -
                       </div>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className=" shadow-soft w-120 ">
                  <div className="">
                  <img src={assets.imageFacility} alt="" className="w-full h-full object-cover "/>
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
                       <div className="h-6 w-6 bg-dark rounded-full ">
                          -
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
      <section>
        <div className="flex justify-center">
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
      </section>

      {/* Section Gallery */}
      <section>
        <h1 className="mx-auto text-center text-3xl font-semibold">
          Our Latest Creations
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion, and style.
        </p>
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
            <div >
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
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter size-6 hover:text-indigo-500"
                    aria-hidden="true"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
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
                    className="lucide lucide-youtube size-6.5 hover:text-indigo-500"
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
