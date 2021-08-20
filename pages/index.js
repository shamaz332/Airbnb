import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Header from "../components/Header/Header";
import LargeCards from "../components/LargeCards/LargeCards";
import MediumCard from "../components/MediumCard/MediumCard";
import SmallCard from "../components/SmallCards/SmallCard";

export default function Home({ exploreData, mediumCardData }) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCardData?.map((item) => (
              <MediumCard key={item.img} image={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCards
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const mediumCardData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      mediumCardData,
    },
  };
}
