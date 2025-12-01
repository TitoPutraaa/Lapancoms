import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import AllBlogs from "../pages/AllBlogs";
import AllGallery from "../pages/AllGallery";
import Login from "../pages/Login";
import PostBlog from "../pages/PostBlog";
import PostImage from "../pages/PostImage";
import Delete from "../pages/Delete";
import ManageAdmin from "../pages/ManageAdmin";
import BlogView from "../components/common/BlogView";
import NotFound from "../pages/NotFound";
import UpdateLP from "../pages/UpdateLP";
import Demo from "../pages/Demo";
import Template from "../components/layout/Template";
import GalleryView from "../components/common/GalleryView";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<Login />} />

        {/* <Route
          element={<PrivateRoute allowedRoles={["admin", "superadmin"]} />}
        > */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="blog/:id" element={<BlogView />} />
            <Route path="gallery/:id" element={<GalleryView />} />
          </Route>
          <Route path="allBlogs" element={<AllBlogs />} />
          <Route path="allGallery" element={<AllGallery />} />
          <Route path="postBlog" element={<PostBlog />} />
          <Route path="postImage" element={<PostImage />} />
          <Route path="delete" element={<Delete />}>
            <Route path="deleteBlog/:id" element={<BlogView />} />
            <Route path="deleteGallery/:id" element={<GalleryView />} />
          </Route>
          <Route path="template" element={<Template />} />

          {/* SUPERADMIN ONLY */}
          {/* <Route element={<PrivateRoute allowedRoles={["superadmin"]} />}> */}
          <Route path="manageAdmin" element={<ManageAdmin />} />
          <Route path="updateLandingPage" element={<UpdateLP />} />
        </Route>
        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}
