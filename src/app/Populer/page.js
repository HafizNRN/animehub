import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import Image from "next/image";

const Populer = async () => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=bypopularity&page=1&limit=20`
  );
  const allTop = await response.json();

  return (
    <>
      <head>
        <title>daftar anime popular</title>
      </head>
      <Header pageTitle="POPULER" />
      <AnimeList api={allTop} />
    </>
  );
};

export default Populer;
