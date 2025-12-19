import { assets } from "../../assets/assets";

export default function ViewTmp2({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          INI TEMPLATE 2 Desa Wisata Yang Diakui di Dunia
        </h1>
        <div className="flex gap-5">
          <div className="mb-8 h-100 w-1/2 shrink-0 overflow-hidden rounded-xl">
            <img
              src={assets.imageAbout}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sit
            reiciendis, rem officia a quasi labore itaque minus earum provident
            excepturi dignissimos sunt aspernatur dolore voluptas!
            Necessitatibus nulla culpa iste? Temporibus blanditiis numquam
            voluptate rerum iste id. Molestias pariatur veritatis iste cum
            repellat neque repellendus sequi hic perferendis ipsa, commodi
            maiores ducimus voluptate, iure eos, accusamus nam similique nemo
            nulla! Adipisci ipsum vero itaque commodi earum explicabo fuga,
            officia dolorem quam velit alias quibusdam veritatis similique quasi
            atque, minima suscipit eius repudiandae consectetur. Ad tenetur
            ipsam eaque earum reiciendis quibusdam?
          </div>
        </div>
        <div className="mt-7 flex gap-5">
          <div className="mb-8 h-100 w-1/2 shrink-0 overflow-hidden rounded-xl">
            <img
              src={assets.viewGallery}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quae
            mollitia dignissimos velit voluptatibus quaerat ipsa. A fugit quasi
            nam voluptas. Et, nostrum. Dignissimos perferendis cumque commodi?
            Quos, quo quae! Blanditiis quis vero nostrum, aut sit error fugit
            ipsam numquam facilis labore corrupti quasi omnis impedit modi,
            quibusdam ex? Sed, sint voluptate suscipit quaerat aperiam at
            tenetur laboriosam eum numquam? Facilis distinctio provident
            possimus maiores rem perspiciatis praesentium, aut amet neque quae
            sit, esse velit quasi tempore tempora quis assumenda fugit
            consectetur sunt deserunt id eos deleniti inventore doloremque!
            Cumque! Repellendus beatae officiis quos accusantium ab omnis
            suscipit ad, adipisci enim magnam doloremque natus fuga quidem quas
            consectetur maxime sunt! Dolorum alias quia repellendus voluptatum
            id blanditiis, quasi eveniet facere.
          </div>
        </div>
      </div>
    </div>
  );
}
