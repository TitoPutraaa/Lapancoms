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
import ViewTmp1 from "../pages/template/viewTmp1";
import ViewTmp2 from "../pages/template/ViewTmp2";
import ViewTmp3 from "../pages/template/ViewTmp3";
import ViewTmp4 from "../pages/template/ViewTmp4";
import ViewTmp5 from "../pages/template/ViewTmp5";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* up here add landing page main*/}
        {/* here add landingpage Pages */}
        <Route path="/admin" element={<Login />} />
        <Route path="/tmp1" element={<ViewTmp1 />} />
        <Route path="/tmp2" element={<ViewTmp2 />} />
        <Route path="/tmp3" element={<ViewTmp3 />} />
        <Route path="/tmp4" element={<ViewTmp4 />} />
        <Route path="/tmp5" element={<ViewTmp5 />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
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
