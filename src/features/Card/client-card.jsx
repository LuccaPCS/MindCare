import styles from "./card.module.css";

export default function ProCard({
  psychologist,
  handleClick,
  isSelected = false,
  details = null,
}) {
  if (!psychologist) return null;

  const imgSrc = `/profilepics/${psychologist.id}.png`;

  return (
    <div className={styles.card} onClick={() => handleClick(psychologist.id)}>
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

        {isSelected && (
          <div className={styles.selected}>
            {!details ? (
              <p>Carregando detalhes...</p>
            ) : (
              <>
                <br />
                <p>
                  <strong>Experiência:</strong>{" "}
                  {details.experience ?? psychologist.experience ?? "—"}
                </p>
                <br />
                <p>
                  {details.introduction ??
                    psychologist.introduction ??
                    "Sem introdução."}
                </p>
                <br />{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(psychologist.id);
                  }}
                >
                  Marcar consulta
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
