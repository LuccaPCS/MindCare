import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page.jsx";
import ChooseProfileSignup from "./pages/choose-profile-signup.jsx";
import ClientSignupPage from "./pages/client-signup-page.jsx";
import ProSignupPage from "./pages/pro-signup-page.jsx";
import ClientDashboardPage from "./pages/client-dashboard-page.jsx";
import ProfilePage from "./pages/pro-profile-page.jsx";

function getAuthStatus() {
  return "client";
}

export default function App() {
  const auth = getAuthStatus();

  return (
    <>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              auth === "pro" ? (
                <Navigate to="/pro-dashboard" replace />
              ) : auth === "client" ? (
                <Navigate to="/client-dashboard" replace />
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
              auth === "client" ? (
                <ClientDashboardPage />
              ) : auth === "pro" ? (
                <Navigate to="/pro-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              auth === "client" ? (
                <ProfilePage />
              ) : auth === "pro" ? (
                <Navigate to="/pro-profile" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}
