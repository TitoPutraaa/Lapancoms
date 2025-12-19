import { assets } from "../../assets/assets";

export default function ViewTmp3({ data }) {
  //   const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  //   const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  //   const img3 = `http://127.0.0.1:8000/storage/template/${data?.img3}`;
  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          INI TEMPLATE 3 Desa Wisata Yang Diakui di Dunia
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus
          cupiditate modi exercitationem facere. Minus nemo fugit ducimus
          eveniet, dolore consequuntur sed nostrum ex optio error voluptatum
          quibusdam. Eligendi, voluptatum! Ad eaque, itaque rerum fugiat
          explicabo cupiditate. Nisi iure minima tempora ipsa? Quia quaerat
          doloremque accusamus, consequatur quam alias dolorem veniam, dolorum
          fuga voluptas exercitationem, corporis ea cumque enim illo. Minima
          amet provident corporis doloremque quis esse fuga cum exercitationem
          incidunt dolorum officiis, voluptatibus sequi. Rerum quaerat dolorem
          voluptatem corrupti pariatur odio dolor officia tempore expedita
          totam, eveniet nam error? Repellendus, harum perspiciatis. Sapiente
          laboriosam deleniti similique expedita ipsa quisquam nobis ex
          corporis! Labore, itaque sequi. Enim culpa explicabo nostrum voluptas
          repellat dolorem repudiandae. Error similique dicta beatae distinctio
          corporis.
        </div>
        <div className="flex items-center gap-5">
          <div className="mb-8 size-90 shrink-0 overflow-hidden">
            <img
              src={assets.imageBlog}
              alt="viewBlog"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
            {/* {data?.text2} */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, ut
            culpa, laboriosam, delectus debitis ratione eaque soluta eligendi
            sunt labore mollitia tenetur saepe magni. Dignissimos doloremque eos
            voluptates dolorem nobis. Facere eum neque, excepturi labore et
            ipsam, illo repellat inventore nemo maiores repudiandae molestiae
            libero commodi nihil, nobis deleniti quia? Reiciendis accusamus
            aliquam autem quos hic consectetur sint ratione doloremque.
            Laboriosam neque provident, unde natus accusantium praesentium
            voluptate similique dolore, odio cumque tenetur. Quae, harum?
            Voluptatem dolorum sint adipisci id magni dolore, labore vitae
            possimus voluptates. Ipsam animi eius autem. Itaque repellat est
            soluta tempora corporis eius totam molestias sapiente dolore facilis
            quos nobis, sint distinctio amet aut mollitia, cupiditate ipsum non
            aliquam repudiandae consequatur harum dicta dolorum? Praesentium,
            repudiandae..
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-5">
          <div className="mb-8 size-90 shrink-0 overflow-hidden">
            <img
              src={assets.imageAbout}
              alt="viewBlog"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-primary flex w-full flex-wrap gap-6 pb-6 text-sm sm:text-base">
            {/* {data?.text3} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in eum
            facere, esse dolorum quos recusandae ea, consequatur odit quas eius,
            veniam possimus dolor quia corporis laborum sapiente cum dolorem?
            Ab, ea facere quas nulla rem, libero quidem quod sed voluptas
            dignissimos officia culpa doloremque repudiandae assumenda. Eligendi
            neque deserunt quibusdam blanditiis culpa placeat nostrum autem at,
            voluptatibus pariatur. Ex! Dicta, quas. Nam necessitatibus
            reiciendis odio, reprehenderit laboriosam illum atque. Aliquam odit
            optio, adipisci alias esse assumenda eaque libero. Maxime id at
            perferendis animi dicta ut minima magnam et quas. Numquam similique
            nisi voluptates deserunt quod nihil, corrupti nesciunt. Voluptas,
            eum? Placeat, iste molestias modi sapiente dolorum voluptas non
            quasi ea beatae. Unde tempore consequuntur doloremque asperiores,
            alias quisquam perferendis.
          </div>
        </div>
      </div>
    </div>
  );
}
