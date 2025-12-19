import { assets } from "../../assets/assets";

export default function ViewTmp1({ data }) {
  //   const urlImage = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full rounded-xl bg-white px-4 transition-all duration-500 sm:w-xl sm:shadow lg:w-3xl">
        <h1 className="text-primary mb-5 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
          VIEW TEMPLATE 1 Desa Wisata Yang Diakui di Dunia
        </h1>
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={assets.viewGallery}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {/* Ki ini text nya di coba di ubah aja biar bisa kebayang kalo text nya banyak atau dikit */}
          {/* soalnya kalo text dikit sama banyak beda dia, gimana caranya bisa tetep konsisten terutama di tmp yang samping sampingan*/}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            aspernatur voluptas quaerat quia explicabo similique rerum quo quos
            nulla modi in obcaecati aut unde dolore molestiae, temporibus animi
            voluptatibus necessitatibus iusto ea quam officia. Modi, suscipit
            repudiandae rerum nihil dolor, nobis maxime quasi quo tempora porro
            iste laudantium reiciendis ullam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium nihil laboriosam nostrum
            unde, assumenda adipisci aliquam temporibus qui molestiae quaerat
            amet ipsa eum, quisquam perspiciatis pariatur! Iusto nobis pariatur
            similique?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Magni nesciunt qui aperiam quibusdam in repudiandae quia totam
            adipisci culpa ad ipsa doloremque, laboriosam, assumenda eum
            dignissimos nihil maiores, ea libero. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Fugit incidunt sit repudiandae
            quaerat!
          </p>
          <p>
            Minus tenetur deleniti deserunt qui enim, praesentium sed
            temporibus, inventore consequatur, vitae velit totam iure itaque
            sapiente? Quae, eveniet excepturi laudantium voluptate doloremque
            vitae animi porro modi nobis officia pariatur dolorum enim cumque
            voluptates amet aperiam facere. In ratione, similique nobis illum at
            rerum ducimus ea accusamus! Quia et qui at voluptatibus aspernatur
            quas harum iste fugiat quasi iure molestiae expedita illum deserunt
            libero molestias dolor, maxime unde commodi possimus animi. Eius ut
            officia impedit magnam maiores? Repellat ipsa nam minima est quas
            tenetur blanditiis magnam voluptatem voluptas laudantium ex odio
            error architecto, iure consectetur dignissimos animi numquam nihil
            in illum fugit laborum reiciendis! Repellat, eaque doloribus!
            Aperiam recusandae, animi, voluptatem tenetur hic, distinctio optio
            autem illo reiciendis obcaecati maiores architecto. Quod ab
            dignissimos illo minima veritatis aliquam repudiandae repellendus
            laudantium accusantium error doloribus vero, est inventore.
          </p>
        </div>
      </div>
    </div>
  );
}
