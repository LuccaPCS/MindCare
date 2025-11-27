import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page.jsx";
import ChooseProfileSignup from "./pages/choose-profile-signup.jsx";
import ClientSignupPage from "./pages/client-signup-page.jsx";
import ProSignupPage from "./pages/pro-signup-page.jsx";
import ClientDashboardPage from "./pages/client-dashboard-page.jsx";
import ProDashboardPage from "./pages/pro-dashboard-page.jsx";
import ClientProfilePage from "./pages/client-profile-page.jsx";
import ProProfilePage from "./pages/pro-profile-page.jsx";

// Função que simula estado de autenticação:
// Retorna "pro", "client" ou "none"
function getAuthStatus() {
  return "client";
}

export default function App() {
  const auth = getAuthStatus();

  return (
    <>
      <div className="app-container">
        <Routes>
          {/* Homepage (depende do estado de autenticação)*/}
          <Route
            path="/"
            element={
              auth === "pro" || auth === "client" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          {/* Dashboard (depende do perfil de usuário) */}
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
          {/* Perfil (depende do perfil de usuário) */}
          <Route
            path="/profile"
            element={
              auth === "client" ? (
                <ClientProfilePage />
              ) : auth === "pro" ? (
                <Navigate to="/pro-profile" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          {/* Demais rotas */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/choose-profile-signup"
            element={<ChooseProfileSignup />}
          />
          <Route path="/client-signup" element={<ClientSignupPage />} />
          <Route path="/pro-signup" element={<ProSignupPage />} />
          <Route path="/pro-dashboard" element={<ProDashboardPage />} />
          <Route path="/pro-profile" element={<ProProfilePage />} />
        </Routes>
      </div>
    </>
  );
}
