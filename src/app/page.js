import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=bypopularity&page=1&limit=8`
  );
  const topAnime = await response.json();
  return (
    <>
      <section>
        <Header pageTitle="TERPOPULER" linkTitle="semua" pageHref="./Populer" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
