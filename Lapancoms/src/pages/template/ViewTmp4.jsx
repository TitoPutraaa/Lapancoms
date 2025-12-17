import { assets } from "../../assets/assets";

export default function ViewTmp4({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  //   const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  //   const img4 = `http://127.0.0.1:8000/storage/template/${data?.img4}`;
  return (
    <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
      <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        INI TEMPLATE 4
      </h1>
      <div className="flex flex-row-reverse gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageAbout}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text1} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          inventore cum totam possimus dolor dolore, animi quam eius alias
          laborum dolores praesentium soluta necessitatibus ullam quod nemo sunt
          earum nesciunt pariatur in. Voluptate illo voluptatem minima
          aspernatur enim ea animi. Harum est nisi veniam saepe itaque eius
          maiores ut doloremque.
        </div>
      </div>

      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={assets.imageFacility}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
        {/* {data?.text2} */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magnam
        aperiam numquam quaerat reiciendis beatae mollitia eaque officia, ipsam
        quae voluptatibus libero quam perspiciatis suscipit optio expedita
        facere aspernatur! Quaerat voluptatum totam quam, molestiae architecto
        in autem cumque ducimus corrupti animi officiis consequatur nemo, ea
        ipsam ipsum placeat excepturi est.
      </div>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={assets.imageAlamat}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
        {/* {data?.text3} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempora
        quisquam harum deleniti quasi animi saepe facilis dicta numquam ipsam
        quis aut illo incidunt placeat, consequuntur distinctio. Impedit, saepe
        fuga!
      </div>
      <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
        <img
          src={assets.imageMaps}
          alt="viewBlog"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
