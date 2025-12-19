import { assets } from "../../assets/assets";

export default function ViewTmp4({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  //   const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  //   const img4 = `http://127.0.0.1:8000/storage/template/${data?.img4}`;
  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          INI TEMPLATE 4 Desa Wisata Yang Diakui di Dunia
        </h1>
        <div className="flex flex-row-reverse gap-5">
          <div className="mb-8 h-30 w-30 shrink-0 overflow-hidden rounded-xl">
            <img
              src={assets.imageAbout}
              alt="viewBlog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-primary flex w-full flex-wrap gap-6 pb-6 text-sm sm:text-base">
            {/* {data?.text1} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            repellat recusandae pariatur deleniti laudantium optio minima, nisi
            animi nam officia blanditiis distinctio hic fuga accusantium alias,
            quaerat atque! Pariatur, nesciunt? Dolores, ducimus. Qui vero itaque
            consequuntur, similique obcaecati architecto ipsum sapiente
            molestiae dicta distinctio dolorum magni. Consectetur ullam sequi
            tempora incidunt, animi unde sunt ad. Aperiam harum veritatis quas
            unde.
          </div>
        </div>

        <div className="mb-7 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageFacility}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text2} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem
          ducimus amet blanditiis accusamus alias neque necessitatibus impedit
          debitis id maxime, harum reiciendis et a quia modi rerum velit
          aliquid! Perspiciatis facilis voluptate rerum mollitia doloremque
          dignissimos vitae sit soluta saepe deleniti atque qui culpa repellat
          esse minima, illo aperiam dolore dolor nulla, voluptatem ut alias
          quis. Repudiandae, ea voluptates? Officia adipisci ducimus maiores,
          sapiente doloribus rerum dolores debitis eligendi illo. Reiciendis
          praesentium delectus iusto similique velit quia ut quas, voluptatem
          architecto, tempore exercitationem! Assumenda libero enim alias quas
          optio? Similique hic numquam aspernatur odio rem blanditiis
          repudiandae, temporibus sed aliquid esse nostrum aut nisi perferendis
          sequi dignissimos repellendus aliquam id in dolore laboriosam voluptas
          sunt quaerat! Ipsa, nostrum ratione! Quis nam fugiat facere et vitae
          perspiciatis! Doloremque, obcaecati consequatur. Magnam voluptatum
          aliquam neque nemo! Maxime tenetur animi, veritatis, provident nostrum
          minus, ipsum esse voluptas vero aperiam dolorem eos! Deserunt?
        </div>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.viewGallery}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* {data?.text3} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
          maiores recusandae minus nam, nulla, aliquam voluptatum veritatis quos
          iusto, saepe ipsam maxime corrupti earum dolores illum modi voluptates
          consequatur. Amet aliquam commodi, molestias modi soluta nulla quod
          eos obcaecati accusamus vel repellat reprehenderit! Quam, temporibus
          impedit veritatis provident perferendis asperiores soluta amet esse
          quasi voluptatem molestias id, deserunt adipisci. Aspernatur
          recusandae itaque quaerat commodi ipsa! Cum hic blanditiis placeat
          officia molestiae velit corporis, labore quasi fugit numquam? In ipsum
          exercitationem doloremque ullam, fugiat vel! Illo quod sed repellat
          maiores! Beatae accusantium ipsa illo, voluptate pariatur soluta et
          consequuntur doloremque sapiente asperiores, iure recusandae aliquam
          possimus iusto? Fuga vel, suscipit expedita voluptate quas officia
          velit tempore. Nostrum harum dicta magni. Excepturi neque, distinctio
          sed sequi recusandae temporibus? Reprehenderit, incidunt eaque
          recusandae molestias, repudiandae explicabo culpa earum commodi quas
          eos atque tenetur esse voluptate, perspiciatis ratione quisquam ea.
          Voluptatum, hic suscipit.
        </div>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.imageAbout}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
