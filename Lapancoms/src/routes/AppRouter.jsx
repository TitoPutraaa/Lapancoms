// navigate pages conect

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="allBlogs" element={<AllBlogs />} />
          <Route path="allGallery" element={<AllGallery />} />
          <Route path="postBlog" element={<PostBlog />} />
          <Route path="postImage" element={<PostImage />} />
          <Route path="blogView" element={<BlogView />} />
          <Route path="delete" element={<Delete />} />
          <Route path="manageAdmin" element={<ManageAdmin />} />
        </Route>
        ,
      </Routes>
    </Router>
  );
}
