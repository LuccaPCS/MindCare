import { useState } from "react";
import CentralBox from "../features/CentralBox/centralbox";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPassword, setInputPassword] = useState(null);

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
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Senha"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button onClick={() => {}}>Login</button>
          <p>
            Ainda não registrado? <a href="/signup">Registrar</a>
          </p>
        </div>
      </CentralBox>
    </div>
  );
}
