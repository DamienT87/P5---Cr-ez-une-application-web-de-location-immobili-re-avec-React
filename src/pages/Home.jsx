import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerImg from "../assets/images/banner_home.png";

//Import de mon fichier JSON
import logements from "../data/logements.json";


export default function Home() {

  const items = logements.map(item => ({
    id: item.id,
    title: item.title,
    cover: item.cover
  }))


  return(
    <main className="container">
      <Banner image={bannerImg} title="Chez vous, partout et ailleurs"/>

      <section className="home-grid">
        <div className="grid cards">
          {items.map(({ id, title, cover }) => (
            <Card key={id} title={title} cover={cover} to={`/logement/${id}`}/>
          ))}
        </div>
      </section>
    </main>
  );
}