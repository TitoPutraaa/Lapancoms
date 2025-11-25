import React from "react";
import gliderImg from '../assets/glider.png';

export default function NotFound() {
    return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-[1rem] shadow-sm w-full max-w-7xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight font-poppins">
            Oops....
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-poppins">
            Page not found
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-poppins">
            This Page doesn't exist or was removed!
            <br />
            We suggest you back to home.
          </p>

          <div className="pt-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#4c95b1] hover:bg-[#14195b] text-white font-medium py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-colors duration-300 shadow-lg shadow-[#785c11]/20"
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
                <path d="M19 12H5"/>
                <path d="M12 19l-7-7 7-7"/>
              </svg>
              Back to home
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src={gliderImg} 
            alt="404 Illustration" 
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
