import { assets } from "../../assets/assets";

export default function ViewGallery({ view, setView }) {
  if (!view) return null;
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-dark/40">
      <div className=" lg:w-4xl lg:h-[550px]  flex flex-row rounded-2xl overflow-hidden relative z-50 md:w-3xl md:h-[422px] sm:w-md w-xs ">
        <button
          onClick={() => setView(false)}
          type="button"
          class=" md:text-primary text-white bg-transparent hover:text-tertiary text-sm w-8 h-8  inline-flex justify-center items-center top-2 right-3 absolute cursor-pointer z-50"
        >
          <svg
            class="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="md:w-1/2 md:bg-dark w-full">
          <img
            src={assets.viewGallery}
            className="w-full h-full object-cover opacity-60"
            alt="viewGallery"
          />
        </div>
        <div className="md:w-1/2 md:p-10 md:bg-white md:static absolute bottom-0 left-0 w-full bg-dark/50 py-4 px-10">
          <h1 className="md:text-4xl font-bold md:text-primary md:mb-5 sm:text-2xl text-xl mb-2 text-white">
            Ocean
          </h1>
          <p className="font-medium md:text-primary text-white md:text-base text-xs ">
            Ari
          </p>
        </div>
      </div>
    </div>
  );
}
