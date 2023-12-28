import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import MyEvents from "./pages/MyEvents";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PublicRoutes from "./routes/PublicRoutes";
import UserPrivateRoutes from "./routes/UserPrivateRoutes";
import AdminPrivateRoutes from "./routes/AdminPrivateRoutes";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import UsersList from "./pages/UsersList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/camps" element={<Events />} />
        <Route
          path="/my-events"
          element={
            <UserPrivateRoutes>
              <MyEvents />
            </UserPrivateRoutes>
          }
        />
        <Route
          path="/add"
          element={
            <AdminPrivateRoutes>
              <AdminDashboard />
            </AdminPrivateRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <AdminPrivateRoutes>
              <UsersList />
            </AdminPrivateRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/admin/login"
          element={
            <PublicRoutes>
              <AdminLogin />
            </PublicRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
