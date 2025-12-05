import gliderImg from "../assets/glider.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm md:flex-row md:p-10">
        <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <h1 className="font-poppins text-5xl font-bold tracking-tight text-black md:text-6xl">
            Oops....
          </h1>
          <h2 className="font-poppins text-3xl font-medium text-gray-900 md:text-4xl">
            Page not found
          </h2>
          <p className="font-poppins mx-auto max-w-md text-lg leading-relaxed text-gray-500 md:mx-0">
            This Page doesn't exist or was removed!
            <br />
            We suggest you back to home.
          </p>

          <div className="pt-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#4c95b1] px-8 py-3 font-medium text-white shadow-lg shadow-[#785c11]/20 transition-colors duration-300 hover:bg-[#14195b]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
          <img
            src={gliderImg}
            alt="404 Illustration"
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
