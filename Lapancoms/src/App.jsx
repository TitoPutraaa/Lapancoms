import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import {
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllBlogs from "./pages/AllBlogs.jsx";
import AllGallery from "./pages/AllGallery.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="allBlogs" element={<AllBlogs />} />
        <Route path="allGallery" element={<AllGallery />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
