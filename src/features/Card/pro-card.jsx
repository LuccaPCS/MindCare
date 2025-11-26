import styles from "./card.module.css";

export default function ProCard({ psychologist }) {
  if (!psychologist) return null;

  const imgSrc = `/profilepics/${psychologist.id}.png`;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={psychologist.name} className={styles.avatar} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{psychologist.name}</h3>
        <p className={styles.content}>
          {Array.isArray(psychologist.specialty)
            ? psychologist.specialty.join(", ")
            : psychologist.specialty}
        </p>
      </div>
    </div>
  );
}
