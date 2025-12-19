import { assets } from "../../assets/assets";

export default function ViewTmp5({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl text-end">
          INI TEMPLATE 5 Desa Wisata Yang Diakui di Dunia
        </h1>
        <div className="flex gap-5">
          <div className="mb-8 h-100 w-1/2 overflow-hidden rounded-xl shrink-0">
            <img
              src={assets.imageAbout}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            {/* {data?.text1} */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis optio architecto cupiditate voluptate totam minus ipsam odit maxime ratione magnam, explicabo voluptates tempore tempora recusandae ea hic. Incidunt, maiores quam.
            Temporibus tempore magnam, commodi doloribus beatae quibusdam nostrum eaque dignissimos aperiam consequuntur dolore vero excepturi repudiandae optio modi. Officiis quidem sed ipsa quos eius facilis illo asperiores possimus dolorem voluptatum?
            Dolor, veritatis eum odio beatae numquam nulla deleniti temporibus vero! Reprehenderit modi veritatis sunt harum ea eligendi? Blanditiis sunt hic perferendis labore quidem porro natus facilis, ipsa id earum deserunt?
          </div>
        </div>
        <div className="mt-5 flex flex-row-reverse gap-5">
          <div className="mb-8 h-100 w-1/2 shrink-0 overflow-hidden rounded-xl">
            <img
              src={assets.imageFacility}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            {/* {data?.text2} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa recusandae earum placeat ratione, quam voluptate eum explicabo vero deserunt, officiis tempora ipsa, possimus nulla laborum natus alias voluptas rem?
            Voluptatem cumque et enim obcaecati nobis, laborum soluta veritatis similique debitis voluptas atque adipisci error in hic doloribus quas incidunt eveniet culpa rerum nulla maiores nemo possimus exercitationem? Et, quisquam?
            Quod commodi ad neque molestiae natus, tenetur totam tempore recusandae eius saepe non. Aspernatur cumque perspiciatis, praesentium sit facere consectetur accusantium dicta dolore ullam voluptas. Vel harum maiores velit rem.
          </div>
        </div>
      </div>
    </div>
  );
}
