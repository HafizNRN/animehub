import Image from "next/image";
import Link from "next/link";

const AnimeListV2 = ({ srcImage, animeTitle, info1, info2 }) => {
  return (
    <>
      <Link href="" className="flex items-center bg-slate-700 overflow-hidden rounded my-3">
        <Image
          src={srcImage}
          width={100}
          height={50}
          className="w-2/4 md:w-2/12 h-auto aspect-video object-cover "
        />
        <div className="w-full h-auto text-md ml-1 p-1">
          <h3>{animeTitle}</h3>
          <div className="w-full flex justify-between text-sm text-white">
            <p>{info1}</p>
            <p>{info2}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AnimeListV2;
