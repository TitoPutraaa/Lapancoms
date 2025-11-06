import "./index.css";
import Login from "./pages/Login.jsx";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AllBlogs = lazy(() => import("./pages/AllBlogs"));
const AllGallery = lazy(() => import("./pages/AllGallery"));
const PostBlog = lazy(() => import("./pages/PostBlog"));
const PostImage = lazy(() => import("./pages/PostImage"));
const Delete = lazy(() => import("./pages/Delete"));
const ManageAdmin = lazy(() => import("./pages/ManageAdmin"));
const BlogView = lazy(() => import("./components/common/BlogView"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Login />} />  */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="postBlog" element={<PostBlog />} />
          <Route path="postImage" element={<PostImage />} />
          <Route path="delete" element={<Delete />} />
          <Route path="manageAdmin" element={<ManageAdmin />} />
          <Route path="allBlogs" element={<AllBlogs />} />
          <Route path="allGallery" element={<AllGallery />} />
        </Route>
        <Route path="/admin/blogView" element={<BlogView />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
