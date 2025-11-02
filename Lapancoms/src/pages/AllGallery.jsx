import { imgData } from "../assets/DataDummy"
import GalleryCard from "../components/common/GalleryCard";

export default function AllGallery() {
    return (
        <div className="card-container">
          {imgData.map((data) => (
            <GalleryCard key={data.title} title={data.title} author={data.author} />
          ))}
        </div>        
    )
}