import Navbar from "../features/Navbar/navbar.jsx";

export default function DashboardPage() {
  return (
    <>
      <Navbar visibleLinks={["Login", "Profile"]} />
      <h2>Dashboard</h2>
    </>
  );
}
