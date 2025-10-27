import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar({ visibleLinks = [] }) {
  const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  const filteredLinks = NAV_LINKS.filter((link) =>
    visibleLinks.includes(link.name)
  );

  return (
    <nav className={styles.navbar}>
      <ul>
        {filteredLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
