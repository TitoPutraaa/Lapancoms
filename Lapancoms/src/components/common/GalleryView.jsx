import { assets } from "../../assets/assets";

export default function ViewGallery({ view, setView }) {
  if (!view) return null;
  return (
    <div className="bg-dark/40 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 flex w-xs flex-row overflow-hidden rounded-2xl sm:w-md md:h-[422px] md:w-3xl lg:h-[550px] lg:w-4xl">
        <button
          onClick={() => setView(false)}
          type="button"
          class="md:text-primary hover:text-tertiary absolute top-2 right-3 z-50 inline-flex h-8 w-8 cursor-pointer items-center justify-center bg-transparent text-sm text-white"
        >
          <svg
            class="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="md:bg-dark w-full md:w-1/2">
          <img
            src={assets.blogCardImg}
            className="h-full w-full object-cover opacity-60"
            alt="viewGallery"
          />
        </div>
        <div className="bg-dark/50 absolute bottom-0 left-0 w-full px-10 py-4 md:static md:w-1/2 md:bg-white md:p-10">
          <h1 className="md:text-primary mb-2 text-xl font-bold text-white sm:text-2xl md:mb-5 md:text-4xl">
            Sunflower
          </h1>
          <p className="md:text-primary text-xs font-medium text-white md:text-base">
            Ari
          </p>
        </div>
      </div>
    </div>
  );
}
