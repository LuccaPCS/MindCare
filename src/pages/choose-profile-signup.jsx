import CentralBox from "../features/CentralBox/centralbox";
import styles from "../features/CentralBox/centralbox.module.css";
import therapist from "../assets/therapist.png";
import client from "../assets/client.png";
import { Link } from "react-router-dom";

export default function ChooseProfileSignup() {
  return (
    <CentralBox>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>Escolha um perfil para se registrar:</p>
        <div className={styles.pickerContainer}>
          <Link to="/pro-signup" className={styles.pickOne}>
            <p>Terapeuta</p>
            <img src={therapist} alt="Terapeuta" />
          </Link>
          <Link to="/client-signup" className={styles.pickTwo}>
            <p>Cliente</p>
            <img src={client} alt="Cliente" />
          </Link>
        </div>
      </div>
    </CentralBox>
  );
}
