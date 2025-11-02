import Banner from "../components/Banner";
import bannerImg from "../assets/images/banner_home.png";

export default function Home() {
  return(
    <main className="container">
      <Banner 
        image={bannerImg}
        title="Chez vous, partout et ailleurs"
      />
      <section style={{ paddingBlock: "24px" }}>

      </section>
    </main>
  );
}