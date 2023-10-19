"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Play } from "@phosphor-icons/react";
import Header from "@/app/components/AnimeList/Header";
import DetailAnime from "@/app/components/DetailAnime";
import AnimeListV2 from "@/app/components/AnimeListV2";

const Detail = async () => {
  const router = useRouter();
  const pathname = window.location.pathname.split("/").pop();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${pathname}`
  );
  const detailAnimeApi = await response.json();

  const watchVideo = () => {
    const video = detailAnimeApi.data.mal_id;
    router.push(`/watch/${video}`);
  };
  
  return (
    <>
      <Header pageTitle={`Detail ${detailAnimeApi.data.title}`} />
      <div className="w-screen h-auto flex gap-3 p-2 mb-3">
        <DetailAnime
          detailImg={detailAnimeApi.data.images.webp.image_url}
          animeTitle={detailAnimeApi.data.title}
          score={detailAnimeApi.data.score}
          members={detailAnimeApi.data.members}
          episodes={detailAnimeApi.data.episodes}
          populer={detailAnimeApi.data.popularity}
          durasi={detailAnimeApi.data.duration}
        />
      </div>
      <button
        onClick={watchVideo}
        className="w-11/12 flex items-center justify-center mx-auto p-2 text-md text-white font-bold bg-yellow-500 text-center hover:text-yellow-500 hover:bg-slate-700 transition-all"
      >
        <Play size={20} className="mr-2" />
        Menonton
      </button>
      <div className="w-screen h-auto mt-4 p-2 text-md text-yellow-500">
        <h2>Ringkasan</h2>
        <p className="text-sm text-white p-2">{detailAnimeApi.data.synopsis}</p>
      </div>
      <div className="w-screen mt-4 p-2 text-yellow-500 bg-slate-800">
        <h2>Episodes</h2>
        <div className="w-full h-96 overflow-y-auto mt-2">
          <AnimeListV2
            srcImage={detailAnimeApi.data.images.webp.image_url}
            animeTitle={detailAnimeApi.data.title}
            info1={`Episode ${detailAnimeApi.data.episodes}`}
            info2={detailAnimeApi.data.duration}
          />
        </div>
      </div>
    </>
  );
};

export default Detail;
