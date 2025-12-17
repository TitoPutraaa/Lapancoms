import "./index.css";
import AppRouter from "./routes/AppRouter";
import AdminProvider from "./auth/AdminProvider";

function App() {
  return (
    <AdminProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AdminProvider>
  );
}

export default App;
