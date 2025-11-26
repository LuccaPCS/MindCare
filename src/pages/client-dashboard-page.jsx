import Navbar from "../features/Navbar/navbar.jsx";
import { useState, useEffect } from "react";
import ProCard from "../features/Card/pro-card.jsx";

export default function ClientDashboardPage() {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar visibleLinks={["Login", "Profile"]} />
      <h2>Dashboard</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {psychologists.map((psychologist) => (
          <ProCard psychologist={psychologist} />
        ))}
      </div>
    </>
  );
}
