import { useState, useEffect } from "react";
import styles from "./card.module.css";

let cachedPsychologists = null;

async function loadPsychologists() {
  if (cachedPsychologists) return cachedPsychologists;
  const res = await fetch("/psychologists-list/psychologists.json");
  if (!res.ok) throw new Error("Falha ao carregar dados dos psicólogos.");
  cachedPsychologists = await res.json();
  return cachedPsychologists;
}

export default function ProCards({ id }) {
  const [psychologist, setPsychologist] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPsychologist() {
      setLoading(true);
      setError(null);
      try {
        const data = await loadPsychologists();
        const found = data.find((p) => p.id === id);
        if (!found) throw new Error("Psicólogo não encontrado.");
        setPsychologist(found);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPsychologist();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!psychologist) {
    return null;
  }
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{psychologist.name}</h3>
      <p className={styles.content}>
        {Array.isArray(psychologist.specialty)
          ? psychologist.specialty.join(", ")
          : psychologist.specialty}
      </p>
    </div>
  );
}
