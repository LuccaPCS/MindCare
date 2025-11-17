import Navbar from "../features/Navbar/navbar.jsx";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPsychologists() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/psychologists-list/psychologists.json");
        if (!response.ok) {
          throw new Error("Falha ao carregar a lista de psicólogos.");
        }
        const data = await response.json();
        setPsychologists(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPsychologists();
  }, []);

  return (
    <>
      <Navbar visibleLinks={["Login", "Profile"]} />
      <h2>Dashboard</h2>
    </>
  );
}
