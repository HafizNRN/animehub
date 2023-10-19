import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anime?limit=24&q=${keyword}`
  );
  const searchAnime = await response.json();
  
  return (
    <>
      <head>
        <title>{`pencarian anime ${keyword}`}</title>
      </head>
      <Header pageTitle={`Pencarian ${params.keyword}`} />
      <AnimeList api={searchAnime} />
    </>
  );
};

export default Page;
