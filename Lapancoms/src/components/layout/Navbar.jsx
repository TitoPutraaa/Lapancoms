import { useEffect, useMemo, useRef, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { GrAttraction } from "react-icons/gr";
import useMediaQuery from "../../hooks/useMediaQueryA";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const isClickScrolling = useRef(false);
  let lastScrollY = useRef(0);

  const sectionIds = useMemo(
    () => ["home", "news", "about", "facility", "maps", "gallery"],
    [],
  );

  const [active, setActive] = useState("home");
  const isSm = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    isSm ? setIsOpen(false) : null;
  }, [isSm]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = window.scrollY + viewportHeight * 0.75;

      if (scrollY < 80) {
        setIsAtTop(true);
      } else if (scrollY > lastScrollY.current) {
        setIsScrollDown(true);
        setIsAtTop(false);
      } else if (scrollY < lastScrollY.current) {
        setIsScrollDown(false);
      }
      lastScrollY.current = scrollY;

      if (isClickScrolling.current) return;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const bottom = top + height;

        if (triggerPoint >= top && triggerPoint < bottom) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  const handleClick = (id) => {
    isClickScrolling.current = true;
    setActive(id);
    document.getElementById(id)?.scrollIntoView();

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };

  // Styling
  const navBgClass =
    !isScrollDown && !isAtTop
      ? "bg-white/80 shadow backdrop-blur-2xl"
      : "bg-transparent backdrop-blur-none";
  const navTextClass = !isAtTop ? "text-dark" : "text-white";
  const navWrapperClass = `
    fixed top-0 right-0 bottom-0 w-0 transition-all duration-600 
    sm:static sm:h-auto sm:w-fit sm:bg-transparent  h-screen
    ${isOpen ? " w-full bg-gray-100" : "bg-transparent"}
  `;

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-100 w-full transition-transform duration-500 ${isScrollDown && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <nav className={`${navBgClass} transition-all duration-300`}>
          <div className="relative container mx-auto flex flex-wrap items-center justify-between px-4 py-4 lg:px-8">
            <a
              href="/"
              className={`flex cursor-pointer items-center space-x-3 md:space-x-4 ${navTextClass}`}
            >
              <GrAttraction className="text-2xl md:text-3xl" />
              <span className="text-xl font-medium whitespace-nowrap md:text-2xl">
                Jatiluwih
              </span>
            </a>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="group sm:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <BsList className={`cursor-pointer text-2xl ${navTextClass}`} />
            </button>

            <div className={navWrapperClass}>
              <div
                className={`absolute top-0 right-0 bottom-0 rounded-l-2xl bg-gray-50 transition-all duration-800 sm:hidden ${isOpen ? "w-18 opacity-100" : " w-0 opacity-0"}`}
              ></div>
              <div
                className={`relative justify-between px-6 py-4 sm:hidden ${isOpen ? "flex" : "hidden"}`}
              >
                <a href="/" className="text-dark flex items-center space-x-3">
                  <GrAttraction className="text-2xl" />
                  x``
                  <span className="self-center text-xl font-semibold whitespace-nowrap">
                    Jatiluwih
                  </span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="group items-center justify-center sm:hidden"
                >
                  <span className="sr-only">Close main menu</span>
                  <BsX className="text-dark cursor-pointer text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-black" />
                </button>
                <span className="absolute right-22 bottom-0 left-4 h-0.5 rounded-full bg-gray-300"></span>
              </div>
              <ul
                className={`mt-1 flex-col gap-5 px-6 py-4 text-sm font-medium sm:mt-0 sm:flex sm:flex-row sm:py-1 md:gap-7 md:text-base ${isOpen ? "flex" : "hidden"}`}
              >
                {sectionIds.map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        handleClick(id);
                        setIsOpen(false);
                      }}
                      className={`group text-dark/50 relative cursor-pointer py-1 first-letter:uppercase sm:px-1 ${active === id ? "navActive" : ""} ${!isScrollDown && !isAtTop ? "hover:text-gray-700 sm:text-gray-500" : " sm:text-white"}`}
                    >
                      {id}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100 ${!isScrollDown && !isAtTop ? "bg-gray-700 " : "bg-gray-700 sm:bg-white"}`}
                      ></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
