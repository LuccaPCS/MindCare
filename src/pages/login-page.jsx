import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import CentralBox from "../features/CentralBox/centralbox";
import UserContext from "../contexts/UserContext.jsx";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setAuthenticatedUser } = useContext(UserContext);

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  async function handleLogin() {
    console.log("Tentando logar com:", inputEmail, inputPassword);
    setLoading(true);
    setError(null);

    try {
      const userFileName = inputEmail.replace("@example.com", "");
      const response = await fetch(`/users/${userFileName}.json`);

      if (!response.ok) {
        setError("Usuário não encontrado.");
        setLoading(false);
        return;
      }

      const userData = await response.json();

      if (!userData || inputPassword !== userData.password) {
        const msg = userData
          ? "Usuário e senha não conferem."
          : "Usuário não encontrado.";
        setError(msg);
        setLoading(false);
        return;
      }

      setAuthenticatedUser(userData);
      console.log("Login userData:", userData);
      if (userData.profile === "client") {
        navigate("/client-dashboard");
      } else if (userData.profile === "pro") {
        navigate("/pro-dashboard");
      } else {
        setError("Perfil de usuário inválido.");
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      setError("Erro ao autenticar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CentralBox>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Email"
            value={inputEmail}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            placeholder="Senha"
            value={inputPassword}
            onChange={onChangePassword}
          />

          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "verificando..." : "Login"}
          </button>

          {isLoading && <div>Verificando credenciais...</div>}
          {error && (
            <div className="error-message" style={{ color: "red" }}>
              {error}
            </div>
          )}

          <p>
            Ainda não registrado?{" "}
            <Link
              to="/choose-profile-signup"
              style={{ color: "rgb(32, 94, 166)", fontWeight: 500 }}
            >
              Registrar
            </Link>
          </p>
        </div>
      </CentralBox>
    </div>
  );
}
