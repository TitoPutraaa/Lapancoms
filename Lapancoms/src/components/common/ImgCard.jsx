import { assets } from "../../assets/assets.js";

export default function ImgCard() {
  return (
    <div>
      <div className="max-w-80 flex items-center justify-center bg-white p-4 pb-10 rounded-3xl mt-20 shadow-xl/20">
        <div className="relative max-h-[16rem] w-80 h-96 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
          <img
            src={assets.blogCardImg}
            alt="Card Image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0  from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
            <h2 className="text-3xl font-bold mb-2">Judul</h2>
            <div className="flex justify-between">
              <p className=" text-gray-200 text-sm">Author</p>
              <button className="px-2 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition duration-200">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
