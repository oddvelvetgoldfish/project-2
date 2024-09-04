import { useEffect, useState } from "react";
import { cn, trendingUrl } from "./constants";
import { IGif } from "@giphy/js-types";
import { TrendingPage } from "./trending-page";

export const Start = () => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [tab, setTab] = useState("trending");

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
        <nav>
          <ul className="flex items-center gap-10">
            <li className={cn(tab === "trending" && "font-black")}>
              <button onClick={() => setTab("trending")}>Trending</button>
            </li>
            <li className={cn(tab === "search" && "font-black")}>
              <button onClick={() => setTab("search")}>Search</button>
            </li>
            <li className={cn(tab === "about" && "font-black")}>
              <button onClick={() => setTab("about")}>About</button>
            </li>
          </ul>
        </nav>
      </div>
      <TrendingPage gifs={gifs} />
    </div>
  );
};
