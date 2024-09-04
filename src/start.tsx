import { useEffect, useState } from "react";
import { GifCard } from "./components/gif-card";
import { trendingUrl } from "./constants";
import Masonry from "react-masonry-css";
import { IGif } from "@giphy/js-types";

export const Start = () => {
  const [gifs, setGifs] = useState<IGif[]>([]);

  // Define breakpoint columns for Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    900: 2,
    500: 1,
  };

  useEffect(() => {
    const url = trendingUrl;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.meta.status !== 200) alert(json.meta.msg);
        setGifs(json.data);
      })
      .catch((err) => {
        // offline, or some other error
        alert(err);
        setGifs([]);
      });
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-8 overflow-auto bg-background p-10">
      <div className="flex items-center justify-between">
        <div className="text-5xl">
          <strong>GIPHY</strong> Search API
        </div>
        <nav className="flex items-center gap-10">
          <span>Trending</span>
          <span>Search</span>
          <span>About</span>
        </nav>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Trending GIFs</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-full"
          columnClassName="mx-1"
        >
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};
