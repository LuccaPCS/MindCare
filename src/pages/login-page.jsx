import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CentralBox from "../features/CentralBox/centralbox";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("usuarioteste@gmail.com");
  const [inputPassword, setInputPassword] = useState("123456");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  async function handleLogin() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/users/${inputEmail}.json`);
      if (!response.ok) {
        setError("Usuário não encontrado.");
        return;
      }
      const userData = await response.json();
      if (!userData || inputPassword !== userData.password) {
        const msg = userData
          ? "Usuário e senha não conferem."
          : "Usuário não encontrado.";
        setError(msg);
        return;
      }
      setError(null);
      navigate("/dashboard");
    } catch {
      setError("Usuário não encontrado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100%",
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
          {error && <div style={{ color: "red" }}>{error}</div>}

          <p>
            Ainda não registrado? <Link to="/signup">Registrar</Link>
          </p>
        </div>
      </CentralBox>
    </div>
  );
}
