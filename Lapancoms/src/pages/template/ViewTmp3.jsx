import { assets } from "../../assets/assets";

export default function ViewTmp3({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  //   const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  return (
    <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
      <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        INI TEMPLATE 3
      </h1>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={assets.imageFacility}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
        {/* {data?.text1} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eveniet.
        Labore totam recusandae voluptas quis! Iure quisquam ab reiciendis
        voluptatum voluptate officia minima totam cum. Eaque repudiandae,
        similique dolores aliquam quae deleniti obcaecati aliquid nulla itaque,
        voluptatem earum. Itaque eum maxime ipsam quis deserunt dolores quia
        quod quo recusandae beatae.
      </div>
      <div className="flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-full sm:h-80 lg:h-95">
          <img
            src={assets.imageBlog}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text2} */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis rem
          amet officiis, tempora optio suscipit illum eligendi quibusdam quam
          architecto nihil impedit sed qui quidem consequuntur repellat facere
          neque laborum distinctio cupiditate. Sapiente dolore nostrum culpa
          error possimus sint. Incidunt neque quaerat eligendi dolores sapiente
          ipsa ut officiis commodi optio!
        </div>
      </div>
      <div className="flex flex-row-reverse gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-full sm:h-80 lg:h-95">
          <img
            src={assets.imageAbout}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text3} */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          facilis id odit, aut omnis accusamus sapiente maiores perspiciatis
          quisquam atque reiciendis doloremque dicta eveniet eaque voluptatem
          sunt voluptas itaque ex. Placeat voluptatem ratione quaerat ab ea
          dolore esse distinctio repellendus est? Nobis sunt eligendi
          voluptatibus perferendis omnis magni quae labore.
        </div>
      </div>
    </div>
  );
}
