export default function BackBtn() {
  return (
    <div className="bg-primary inline-flex items-center rounded-4xl px-5 py-1 text-center text-sm text-white transition duration-700 ease-in-out">
      <svg
        class="mr-2 h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Back
    </div>
  );
}
