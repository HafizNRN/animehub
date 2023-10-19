"use client";
import React from "react";
import ReactPlayer from "react-player";

const videoPage = async ({ params }) => {
  const { video } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${video}`
  );
  const videoAnime = await response.json();

  return (
    <div>
      <ReactPlayer
        url={videoAnime.data.trailer.url}
        controls={true}
        aspectRatio={16 / 9}
      />
    </div>
  );
};

export default videoPage;
