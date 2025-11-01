import "./App.css";
import Dashboard from "./components/layout/DashboardMain.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";

import "./css/layout.css";

function App() {
  return (
    <div className="">
      {/* <Sidebar content={<Dashboard />} /> */}
      <Dashboard />
    </div>
  );
}

export default App;
