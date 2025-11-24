import { assets } from "../assets/assets";
import BlogCard from "../components/common/BlogCard"
import { blogData } from "../assets/DataDummy";


export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed z-50 w-full">
        <nav className="">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={assets.logo}
                className="h-10 "
                alt=""
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Travelog
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 "
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
              <ul className="mt-4 flex flex-col rounded-lg  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 gap-5">
                <li>
                  <a href="#" className=" text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white"
                  >
                    Facility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white"
                  >
                    Maps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Hero Section */}
      <div className="h-dvh relative">
         <div className="absolute inset-0 ">
        <img
          src={assets.imagePublic}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="absolute top-1/2 z-9 right-0 left-0  -translate-y-1/2 ">
          <div className="container px-5 w-2xl ml-30  " > 
            <h1 className="text-white mb-10 w-2xl">It's A Big World Out There Go Explore</h1>
            <p className="text-white mb-20 w-lg" >Discover new attractions and experience to match yuor interests and travet style</p>
            <button className="text-white bg-emerald-600 rounded-full px-8 py-2 block font-medium group-hover:translate-x-1 transition duration-500 md:px-8 md:py-3 " >Learn More</button>
          </div>
      </div>
      </div>

      {/* Section Blog */}
      <section>
        <div>
          <h2 className="">Latest Stories from Croatia</h2>
        </div>
        <div className="flex mx-2">
        {blogData.slice(0, 3).map((data) => (
          <div className="mx-3">
          <BlogCard key={data.title} title={data.title} date={data.date} author={data.author} />        
          </div>
        ))}
        </div>
        
      </section>


      {/*Section About*/}
      <section>
        <div className="container mx-auto w-full ">
          <h2 className="font-semibold">About Page</h2>
          <h2 className="text-4xl font-semibold mb-4">Beautiful Italy Let's travel</h2>
          <div className="flex gap-10 w-full mx-4 md:mx-auto rounded-xl shadow-soft">
            <img src={assets.imageAbout}
                alt="promotional" className=" h-[550px] shrink-0 md:block w-full max-w-lg rounded-l-xl" />
            <div >
               
                <div className=" mt-40 pr-6">
                    <p className="">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.
                    </p>
                  <div className="flex justify-end ">
                    <button className="mt-40 bg-amber-50 px-6 py-2  "> 
                        Read More 
                    </button>
                  </div>
                </div>
            </div>
        </div>
        </div>
      </section>


      {/* Section Facility */}
      <section>
        <div className="pr-230 pl-10 pt-10">
          <h2 className="bg-amber-400 font-semibold  " >Experience OurcBest Facility</h2>
          <p className="pt-5">Discover new attractions and experiences to match your interests.</p>
          <div className="pt-15  ">
              <img src={assets.imageFacility} alt="" />
          </div>
        </div>
      </section>


      {/* Section Maps */}
      <section>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0612823106626!2d115.27926447416915!3d-8.590106787203071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23e273396d515%3A0x4b3b9a132034718c!2sPoliteknik%20Negeri%20Bali%20Kampus%20Gianyar!5e0!3m2!1sid!2sid!4v1763982286469!5m2!1sid!2sid" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>


      {/* Section Gallery */}
      <section>
        <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop" alt="image" className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Image Title</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
      </section>


      {/* Section Footer */}
      <section>
        <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] bg-blue-950">
                <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                  
                   <img src={assets.logoFooter} alt="" />

                   
                    <div className="">
                        <p className="text-white">Menu</p>
                        <ul className="mt-2 space-y-1">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/" className="text-white">Blog</a></li>
                            <li><a href="/" className="text-white">About</a></li>
                            <li><a href="/" className="text-white">Facility</a></li>
                            <li><a href="/" className="text-white">Maps</a></li>
                            <li><a href="/" className="text-white">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">Contact Info</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="text-white">+123 456 789</a></li>
                            <li><a href="/" className="text-white">info@travellian.com</a></li>
                            <li><a href="/" className="text-white">1245, New Yourk, USA</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="text-white">Follow us on </p>
                </div>
            </footer>
      </section>
    </div>
    
  );
}
