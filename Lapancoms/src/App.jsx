import "./index.css";
import AppRouter from "./routes/AppRouter";
import AdminProvider from "./auth/AdminProvider";
import GallerysProvider from "./api/content/BlogsProvider";
import BlogsProvider from "./api/content/GallerysProvider";

function App() {
  return (
    <AdminProvider>
      <GallerysProvider>
        <BlogsProvider>
          <div className="App">
            <AppRouter />
          </div>
        </BlogsProvider>
      </GallerysProvider>
    </AdminProvider>
  );
}

export default App;
