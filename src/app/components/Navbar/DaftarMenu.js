import Link from "next/link";
import {
  House,
  ClockCountdown,
  FireSimple,
  Crown,
  ListPlus,
} from "@phosphor-icons/react";
import LinkList from "@/app/components/utility/LinkList";

const DaftarMenu = ({ setTransX }) => {
  return (
    <div
      className="w-screen h-screen bg-slate-900/50 absolute top-0 left-0 transition-transform"
      style={{
        transform: `translateX(${setTransX ? "0" : "-100%"})`,
      }}
    >
      <div className="w-8/12 h-full flex flex-col gap-10 text-md text-white font-bold bg-slate-800 p-2 pt-4 pl-4">
        <LinkList
          linkListHref="/"
          linkListIcon={<House size={25} className="text-yellow-500" />}
          linkListTitle="Beranda"
        />
        <LinkList
          linkListHref="/Terbaru"
          linkListIcon={<ClockCountdown size={25} className="text-yellow-500" />}
          linkListTitle="Terbaru"
        />
        <LinkList
          linkListHref="/Trending"
          linkListIcon={<FireSimple size={25} className="text-yellow-500" />}
          linkListTitle="Trending"
        />
        <LinkList
          linkListHref="/Populer"
          linkListIcon={<Crown size={25} className="text-yellow-500" />}
          linkListTitle="Populer"
        />
        <LinkList
          linkListHref="/Genre"
          linkListIcon={<ListPlus size={25} className="text-yellow-500" />}
          linkListTitle="Genre"
        />
      </div>
    </div>
  );
};

export default DaftarMenu;
