import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page.jsx";
import ClientSignupPage from "./pages/client-signup-page.jsx";
import ProSignupPage from "./pages/pro-signup-page.jsx";
import DashboardPage from "./pages/dashboard-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";
import Navbar from "./features/Navbar/navbar.jsx";

export function Home() {
  return (
    <>
      <Navbar
        visibleLinks={[
          "Home",
          "Login",
          "Client Signup",
          "Pro Signup",
          "Dashboard",
          "Profile",
        ]}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/client-signup" element={<ClientSignupPage />} />
          <Route path="/pro-signup" element={<ProSignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}
