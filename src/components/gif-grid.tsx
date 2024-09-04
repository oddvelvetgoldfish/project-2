import React from "react";
import Masonry from "react-masonry-css";
import { GifCard } from "./gif-card";
import { IGif } from "@giphy/js-types";

// Define breakpoint columns for Masonry layout
const breakpointColumnsObj = {
  default: 4,
  1300: 3,
  900: 2,
  500: 1,
};

interface Props {
  gifs: IGif[];
}
export const GifGrid = ({ gifs }: Props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-full"
      columnClassName="mx-1"
    >
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </Masonry>
  );
};
