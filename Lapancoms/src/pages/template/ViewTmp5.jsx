import { assets } from "../../assets/assets";

export default function ViewTmp5({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl">
      <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        INI TEMPLATE 5
      </h1>
      <div className="flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageAbout}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text1} */}
          Lorem
        </div>
      </div>
      <div className="mt-7 flex flex-row-reverse gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageFacility}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text2} */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          beatae debitis doloremque doloribus ducimus saepe earum esse itaque
          sequi culpa enim eos suscipit repudiandae cum recusandae, officia aut
          molestiae temporibus animi ipsum magnam atque unde quaerat cupiditate!
          Nisi, veritatis! Vero alias architecto, veniam dolorem labore saepe
          eos dolore. Nesciunt, ad!
        </div>
      </div>
    </div>
  );
}
