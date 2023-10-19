import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {api.data.map((dataApi) => {
        return (
          <Link
            href={`/Detail/${dataApi.mal_id}`}
            className="overflow-hidden rounded-2xl text-md text-white bg-gray-800 cursor-pointer hover:text-yellow-500"
          >
            <div className="aspect-vertical overflow-hidden relative">
              <Image
                src={dataApi.images.webp.image_url}
                alt={dataApi.title}
                width={250}
                height={250}
                className="w-full h-full object-cover hover:scale-105"
              />
              <strong className="w-10 min-w-fit h-10 flex items-center justify-center bg-yellow-500 text-slate-800 absolute top-0 left-0 rounded-br-2xl p-1">
                {dataApi.popularity}
              </strong>
            </div>
            <h2 className="font-bold p-2 transition-all">
              {dataApi.title}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
