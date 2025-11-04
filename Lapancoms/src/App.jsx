import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import Login from "./pages/Login.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AllBlogs from "./pages/AllBlogs.jsx";
import AllGallery from "./pages/AllGallery.jsx";
import BlogView from "./components/common/BlogView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/admin" element={<Sidebar content={<Dashboard />} />} />
        <Route path="/allBlogs" element={<Sidebar content={<AllBlogs />} />} />
        <Route
          path="/allGallery"
          element={<Sidebar content={<AllGallery />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/BlogView" element={<BlogView />} />
      </Routes>
    </Router>
  );
}

export default App;
