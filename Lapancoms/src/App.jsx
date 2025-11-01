import "./App.css";
import Dashboard from "./components/layout/DashboardMain.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import Login from "./pages/Login.jsx";
import ViewGallery from "./components/common/ViewGallery.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./css/layout.css";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/login" />} />
    //     <Route path="/admin" element={<Sidebar content={<Dashboard />} />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
    <ViewGallery />
  );
}

export default App;
