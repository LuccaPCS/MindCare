import Navbar from "../features/Navbar/navbar.jsx";

export default function ClientProfilePage() {
  return (
    <>
      <Navbar visibleLinks={["Login", "Dashboard"]} />
      <h2 style={{ padding: "1rem" }}>Perfil do Cliente</h2>
    </>
  );
}
