import styles from "./centralbox.module.css";
import logo from "../../assets/logo-name-1.svg";

export default function CentralBox({ children }) {
  return (
    <div className={styles.centralbox}>
      <div className={styles.boxheader}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.boxcontent}>{children}</div>
    </div>
  );
}
