"use client";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import InputSearch from "@/app/components/Navbar/InputSearch";
import DaftarMenu from "@/app/components/Navbar/DaftarMenu";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function menuBtn() {
    setMenu(!menu);
  }

  const [search, setSearch] = useState(false);
  function searchBtn(event) {
    if (event.type === "click") {
      setSearch(!search);
    }
  }

  return (
    <div className="w-screen min-h-16 flex justify-between items-center flex-col bg-slate-900/50 sticky top-0 left-0 z-99999 backdrop-blur-md p-1.5">
      <nav className="w-full flex justify-between items-center p-2 text-white">
        <button
          className="flex items-center justify-center text-3xl"
          onClick={searchBtn}
        >
          <MagnifyingGlass size={32} />
        </button>
        <Link href="/" className="text-3xl font-bold">
          ANIMEHUB
        </Link>
        <button
          className="flex items-center justify-center text-3xl z-10"
          onClick={menuBtn}
        >
          <List size={32} />
        </button>
      </nav>
      <DaftarMenu setTransX={menu} />
      <InputSearch setDisplay={search} />
    </div>
  );
};

export default Navbar;
