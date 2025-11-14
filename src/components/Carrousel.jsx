import { useState, useCallback, useEffect } from "react";
import "./Carrousel.scss";

export default function Carrousel({ pictures = [], alt = "Photo du logement" }) {
  // total DOIT être un nombre
  const total = Array.isArray(pictures) ? pictures.length : 0;
  const [index, setIndex] = useState(0);

  // Réinitialise l’index quand le nombre d’images change
  useEffect(() => { setIndex(0); }, [total]);

  const prev = useCallback(() => {
    if (!total) return;
    setIndex(i => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    if (!total) return;
    setIndex(i => (i + 1) % total);
  }, [total]);

  if (!total) return null;
  const controle = total > 1;

  return (
    <div className="carrousel" role="region" aria-label="Galerie d'images du logement">
      <div className="carrousel__fenetre">
        <img
          className="carrousel__img"
          src={pictures[index]}
          alt={`${alt} - ${index + 1} / ${total}`}
        />
      </div>

      {controle && (
        <>
          <button type="button" className="carrousel__controle carrousel__controle--prev" onClick={prev} aria-label="Image précédente"> ‹ </button>
          <button type="button" className="carrousel__controle carrousel__controle--next" onClick={next} aria-label="Image suivante"> › </button>

          <div className="carrousel__compteur" aria-live="polite">
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}