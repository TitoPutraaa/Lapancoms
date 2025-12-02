import { imgData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link, useLocation } from "react-router-dom";

export default function AllGallery() {
  const location = useLocation();
  const fromFeature = location.state?.fromFeature; //dapat dari state Link
  let url = "/admin";
  if (fromFeature === "view") {
    url = "../dashboard";
  } else if (fromFeature === "delete") {
    url = "../delete";
  } else {
    console.log("error");
  }
  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-between">
        <h2 className="text-dark text-2xl font-medium">All Gallery</h2>
        <Link to={url} replace>
          <div className="">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        {imgData.slice(0, 8).map((data) => (
          <GalleryCard
            key={data.idGambar}
            idGambar={data.idGambar}
            title={data.title}
            author={data.author}
            image={data.namaGambar}
            fromFeature={fromFeature}
          />
        ))}
      </div>
    </div>
  );
}
