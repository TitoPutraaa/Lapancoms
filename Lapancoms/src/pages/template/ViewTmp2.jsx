import { assets } from "../../assets/assets";

export default function ViewTmp2({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
      <h1 className="text-primary mb-10 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        INI TEMPLATE 2
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
          Lorem
        </div>
      </div>
      <div className="mt-7 flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageBlog}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          dolor nobis maxime repudiandae corrupti aperiam, sint vel impedit
          ducimus voluptatibus magnam illo. Nostrum laborum reprehenderit labore
          quo dignissimos minima accusamus velit porro? Veritatis ducimus magnam
          architecto nam doloribus tempore nihil dolore aperiam, quo praesentium
          blanditiis ea aut delectus reiciendis facilis.
        </div>
      </div>
    </div>
  );
}
