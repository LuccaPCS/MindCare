import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page.jsx";
import ChooseProfileSignup from "./pages/choose-profile-signup.jsx";
import ClientSignupPage from "./pages/client-signup-page.jsx";
import ProSignupPage from "./pages/pro-signup-page.jsx";
import ClientDashboardPage from "./pages/client-dashboard-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";

function isLoggedIn() {
  return false;
}

export default function App() {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn() ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/choose-profile-signup"
            element={<ChooseProfileSignup />}
          />
          <Route path="/client-signup" element={<ClientSignupPage />} />
          <Route path="/pro-signup" element={<ProSignupPage />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn() ? (
                <ClientDashboardPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}
