import React from "react";
import genres from "./genres-list";

function Genres() {
  return (
    <div className="flex flex-col w-full xl:w-[60%] mx-auto space-y-2 max-w-[1200px]">
      <p className="font-[800] text-xl self-center">Genres</p>
      <div className="relative">
        <div className="flex space-x-4 px-10 items-center w-full overflow-auto scrollbar-none">
          {genres.map((genre, index) => (
            <p key={index} className="whitespace-nowrap">
              {genre.label}
            </p>
          ))}
        </div>
        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#000] h-full w-[100px]" />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#000] h-full w-[100px]" />
      </div>
    </div>
  );
}

export default Genres;
