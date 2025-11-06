import "./index.css";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllBlogs from "./pages/AllBlogs.jsx";
import AllGallery from "./pages/AllGallery.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
=======
import AppRouter from "./routes/AppRouter";
>>>>>>> 26664f4437b965e25e240a5ec1524f40d8347857

function App() {
  const routerAdmin = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/admin" element={<RootLayout />}>
        <Route path="/admin/Dashboard" element={<Dashboard />} />
        <Route path="/admin/allBlogs" element={<AllBlogs />} />
        <Route path="/admin/allGallery" element={<AllGallery />} />
      </Route>,

      // <Route path="/admin/view">
      //   <Route path="/admin/view/viewAllBlogs" element={<AllBlogs />} />
      //   <Route path="/admin/view/viewUpdateLP" />
      // </Route>,
    ),
  );
  // const routerPublic = createBrowserRouter(createRoutesFromElements(
  //   <Route path="/" element={}>
  //     <Route path="/home" element={} />

  //   </Route>
  // ));

  return (
<<<<<<< HEAD
    <RouterProvider router={routerAdmin} />

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/login" />} />
    //     <Route path="/admin" element={<Sidebar content={<Dashboard />} />} />
    //     <Route path="/allBlogs" element={<Sidebar content={<AllBlogs />} />} />
    //     <Route
    //       path="/allGallery"
    //       element={<Sidebar content={<AllGallery />} />}
    //     />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
=======
    <div className="App">
      <AppRouter />
    </div>
>>>>>>> 26664f4437b965e25e240a5ec1524f40d8347857
  );
}

export default App;
