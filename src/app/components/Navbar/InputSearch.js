"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PaperPlaneRight } from "@phosphor-icons/react";

const InputSearch = ({ setDisplay}) => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      if (searchRef.current.value !== "") {
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
        searchRef.current.value = "";
        document.querySelector("#search").blur();
      } else {
        document.querySelector("#search").focus();
      }
    }
  };
  return (
    <div
      className="w-8/12 text-gray-900 items-center justify-center text-md rounded mt-2"
      style={{ display: setDisplay ? "flex" : "none" }}
      id="contSearch"
    >
      <input
        id="search"
        type="text"
        placeholder="Cari Anime"
        className="bg-white text-gray-900 outline-0 rounded-s-md p-2"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        class="bg-yellow-500 rounded-e-md hover:text-yellow-500 hover:bg-gray-700 transition-all p-2"
        onClick={handleSearch}
      >
        <PaperPlaneRight size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
