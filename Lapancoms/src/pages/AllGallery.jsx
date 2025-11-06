import { imgData } from "../assets/DataDummy";
import BackBtn from "../components/common/BackBtn";
import GalleryCard from "../components/common/GalleryCard";
import { useNavigate } from "react-router-dom";

export default function AllGallery() {
  const navigate = useNavigate();
  return (
    <div className="mx-5 mb-12">
      <div className="mb-4 flex justify-between">
        <h2 className="text-3xl">All Gallery</h2>
        <button onClick={() => navigate("/admin")} className="mr-12">
          <BackBtn />
        </button>
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
