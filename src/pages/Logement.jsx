import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import NotFound from "./NotFound";
import Carrousel from "../components/Carrousel";

export default function Logement(){
  //Récupération de l'id du logement
  const {id} = useParams();
  const item = Array.isArray(logements) ? logements.find(logement => String(logement.id) === String(id)) : null;

  //Gerer si le logement n'est pas trouvé pour aller sur la 404
  if(item){
    //Construction de ce qui constitue item
    const {
      title,
      location,
      host,
      rating,
      tags = [],
      description,
      equipments = [],
      pictures = [],
    } = item;

    return (
      <main className="container logement">

        <section className="logement__gallery">
          <Carrousel pictures={pictures} alt={title} />
        </section>

        {/* En-tête : titre location tags et notes*/}
        <section className="logement__header" style={{ display: "grid", gap: 16, marginTop: 24 }}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <p style={{ margin : "8px 0 0" }}>{location}</p>

            { /* Tags */ }
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12}}>
              {tags.map((tag) => (
                <span key={tag} style={{ background: "#FF6060", color: "#fff", borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600}}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hebergeur et note*/}
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifySelf:"end"}}>
            {/* Hebergeur */}
            {host && (
              <div style={{ display: "flex", alignItems: "center", gap: 8}}>
                <span style={{ maxWidth: 120, textAlign: "right", fontWeight: 600, lineHeight: 1.2}}>
                  {host.name}
                </span>
                {host.picture && (
                  <img src={host.picture} alt={host.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }}/>
                )}
              </div>
            )}

            {/* Notes */}
            <div aria-label={`Note ${rating}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ fontSize: 20, color: i < Number(rating) ? "#FF6060" : "#E3E3E3"}}>★</span>
              ))}
            </div>
          </div>
        </section>

        {/* Description & Equipements du logement */}
        <section className="logements__collapses" style={{ display: "grid", gap: 16, marginTop: 24}}>
          <div style={{ background: "#F6F6F6", borderRadius: 10, padding: 16}}>
            <strong>Description</strong>
            <p style={{marginTop : 8}}>{description}</p>
          </div>

          <div style={{ background: "#F6F6F6", borderRadius: 10, padding: 16}}>
            <strong>Équipments</strong>
            <ul style={{marginTop: 8, paddingLeft: 18}}>
              {equipments.map((equipement) => <li key={equipement}>{equipement}</li>)}
            </ul>
          </div>
        </section>
      </main>
    )
  }else{
      return <NotFound />;
  }
  



}