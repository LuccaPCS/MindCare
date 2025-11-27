import Navbar from "../features/Navbar/navbar.jsx";

export default function ProProfilePage() {
  return (
    <>
      <Navbar visibleLinks={["Login", "Dashboard"]} />
      <h2 style={{ padding: "1rem" }}>Perfil</h2>
    </>
  );
}
