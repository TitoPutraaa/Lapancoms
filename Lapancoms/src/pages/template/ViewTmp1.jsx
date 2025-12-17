import { assets } from "../../assets/assets";

export default function ViewTmp1({ data }) {
  //   const urlImage = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  return (
    <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
      <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        VIEW TEMPLATE 1
      </h1>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={assets.imagePublic}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
        {/* Ki ini text nya di coba di ubah aja biar bisa kebayang kalo text nya banyak atau dikit */}
        {/* soalnya kalo text dikit sama banyak beda dia, gimana caranya bisa tetep konsisten terutama di tmp yang samping sampingan*/}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        aspernatur voluptas quaerat quia explicabo similique rerum quo quos
        nulla modi in obcaecati aut unde dolore molestiae, temporibus animi
        voluptatibus necessitatibus iusto ea quam officia. Modi, suscipit
        repudiandae rerum nihil dolor, nobis maxime quasi quo tempora porro iste
        laudantium reiciendis ullam?
      </div>
    </div>
  );
}
