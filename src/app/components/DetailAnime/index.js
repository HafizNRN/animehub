import Image from "next/image";
import DetailInfo from "@/app/components/DetailAnime/DetailInfo";

const DetailAnime = ({
  detailImg,
  animeTitle,
  score,
  members,
  episodes,
  populer,
  durasi,
}) => {
  return (
    <>
      <div className="w-2/6 md:w-2/12 h-auto aspect-vertical overflow-hidden rounded">
        <Image
          src={detailImg}
          width={250}
          height={250}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-between text-md text-white">
        <h2 className="w-full text-yellow-500 font-bold">{animeTitle}</h2>
        <DetailInfo info="Score" infoValue={score} />
        <DetailInfo info="Members" infoValue={members} />
        <DetailInfo info="Episodes" infoValue={episodes} />
        <DetailInfo info="Populer" infoValue={populer} />
        <DetailInfo info="Durasi" infoValue={durasi} />
      </div>
    </>
  );
};

export default DetailAnime;
