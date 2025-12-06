import { useEffect, useState } from "react";
import { GalleryContext } from "./ContentContext";
import galleryApi from "../galleryApi";

export default function GallerysProvider({ children }) {
  const [gallerys, setGallerys] = useState(null);

  async function loadGallerys() {
    const { data } = await galleryApi.getAll();
    setGallerys(data);
  }
  useEffect(() => {
    loadGallerys();
  }, []);

  return (
    <GalleryContext.Provider value={{ setGallerys, gallerys, loadGallerys }}>
      {children}
    </GalleryContext.Provider>
  );
}
