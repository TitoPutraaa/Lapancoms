import { assets } from "../../assets/assets.js";

export default function ImgCard({ title, author }) {
  return (
    <div>
      <div className="max-w-80 flex items-center justify-center bg-white p-4 pb-10 rounded-3xl mt-20 shadow-xl/20">
        <div className="relative max-h-[16rem] w-80 h-96 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
          <img
            src={assets.blogCardImg}
            alt="Card Image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end text-white">
            <div className="bg-black/60 rounded-3xl py-3 ">
              <h2 className="flex items-start text-3xl font-bold ml-6">
                {title}
              </h2>
              <div className="flex justify-between">
                <p className=" text-gray-200 text-sm mt-2 ml-6">{author}</p>
                <button className="px-7 py-0.5 rounded-full mr-2 bg-white/40 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition duration-200">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
