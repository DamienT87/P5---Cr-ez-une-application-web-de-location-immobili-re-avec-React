import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aproposBanner from "../assets/images/banner_apropos.png";
import "./APropos.scss";

const sections = [
  {
    title: "Fiabilité",
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations sont 
    régulièrement vérifiées par nos équipes.`
  },
  {
    title: "Respect",
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire ou perturbateur entraînera une exclusion de la plateforme.`
  },
  {
    title: "Service",
    content: `Nos équipes se tiennent à votre disposition pour vous fournir 
    une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  },
  {
    title: "Responsabilité",
    content: `La sécurité est la priorité de Kasa. 
    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement respecte 
    les critères de sécurité établis par nos services.`
  }
]

export default function APropos() {
  return(
    <main className="container apropos">
      <Banner image={aproposBanner} />

      <section className="apropos__collapses">
        {sections.map(({title, content}) =>(
          <Collapse key={title} title={title} className="apropos__collapse">
            <p>{content}</p>
          </Collapse>
        ))}
      </section>
      
    </main>
  )
}