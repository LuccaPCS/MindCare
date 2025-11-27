import Navbar from "../features/Navbar/navbar.jsx";

export default function ProDashboardPage() {
  return (
    <>
      <Navbar visibleLinks={["Login", "Profile"]} />
      <h2 style={{ padding: "1rem" }}>Dashboard</h2>
      <h3
        style={{
          padding: "0 0 1rem 1rem",
          fontSize: "1.3rem",
          color: "var(--main-green-dark)",
        }}
      >
        Minhas consultas
      </h3>
    </>
  );
}
