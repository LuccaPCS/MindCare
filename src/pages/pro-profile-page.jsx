import Navbar from "../features/Navbar/navbar.jsx";

export default function ProfilePage() {
  return (
    <>
      <Navbar visibleLinks={["Login", "Dashboard"]} />
      <h2>Profile</h2>
    </>
  );
}
