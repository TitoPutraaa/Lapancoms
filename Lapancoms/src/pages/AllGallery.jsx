import { imgData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { Link } from "react-router-dom";

export default function AllGallery() {
  return (
    <div className="mx-5 mb-12">
      <div className="mb-4 flex justify-between">
        <h2 className="text-3xl">All Gallery</h2>
        <Link to="/admin/dashboard" replace>
          <div className="mr-12">
            <BackBtn />
          </div>
        </Link>
      </div>
      <div className="card-container">
        {imgData.map((data) => (
          <GalleryCard
            key={data.title}
            title={data.title}
            author={data.author}
          />
        ))}
      </div>
    </div>
  );
}
