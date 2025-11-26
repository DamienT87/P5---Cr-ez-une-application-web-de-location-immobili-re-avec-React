import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import NotFound from "./NotFound";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import starFull from "../assets/images/star_full.svg";
import starEmpty from "../assets/images/star_empty.svg";
import "./Logement.scss";

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
        <section className="logement__header">
          <div>
            <h1 className="logement__title">{title}</h1>
            <p className="logement__location">{location}</p>

            { /* Tags */ }
            <div className="logement__tags">
              {tags.map((tag) => (
                <span key={tag} className="logement__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hebergeur et note*/}
          <div className="logement__meta">
            {/* Hebergeur */}
            {host && (
              <div className="logement__host">
                <span className="logement__host-name">
                  {host.name}
                </span>
                {host.picture && (
                  <img src={host.picture} alt={host.name} className="logement__host-avatar"/>
                )}
              </div>
            )}

            {/* Notes */}
            <div className="logement__rating" aria-label={`Note ${rating}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={i < rating ? starFull : starEmpty} 
                alt={i < rating ? "Etoile pleine" : "Etoile vide"} 
                className="rating__star"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Description & Equipements du logement */}
        <section className="logement__collapses">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>

          <Collapse title="Equipements">
            <ul style={{marginTop: 8, paddingLeft: 18}}>
              {equipments.map((equipement) => <li key={equipement}>{equipement}</li>)}
            </ul>
          </Collapse>
        </section>
      </main>
    )

  }else{
      return <NotFound />;
  }
}