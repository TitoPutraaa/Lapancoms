export default function ViewTmp2({ data }) {
  const img1 = `http://127.0.0.1:8000/storage/template/${data?.img1}`;
  const img2 = `http://127.0.0.1:8000/storage/template/${data?.img2}`;
  return (
    <>
      <h1 className="text-primary mb-10 pt-5 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl">
        {data?.judul}
      </h1>
      <div className="flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img1}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {data?.text1}
        </div>
      </div>
      <div className="mt-7 flex gap-5">
        <div className="mb-8 h-75 w-full overflow-hidden rounded-xl sm:h-80 lg:h-95">
          <img
            src={img2}
            alt="viewBlog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-primary flex flex-wrap gap-6 pb-6 text-sm sm:text-base">
          {data?.text2}
        </div>
      </div>
    </>
  );
}
