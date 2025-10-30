import "./App.css";
import BlogCard from "./components/common/BlogCard.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BlogCard />
    </div>
  );
}

export default App;
