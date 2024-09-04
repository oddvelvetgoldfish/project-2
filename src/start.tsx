import { useEffect, useState } from "react";
import { searchBaseUrl, trendingUrl } from "./constants";
import { IGif } from "@giphy/js-types";
import { TrendingPage } from "./trending-page";
import { Navbar } from "./components/navbar";
import { SearchPage } from "./search-page";
import { AboutPage } from "./about-page";

export const Start = () => {
  const [tab, setTab] = useState("trending");

  const [gifs, setGifs] = useState<IGif[]>([]);
  const [searchGifs, setSearchGifs] = useState<IGif[]>([]);

  const [inputState, setInputState] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    if (searchTerm === "") return setSearchGifs([]);
    const searchUrl = `${searchBaseUrl}${searchTerm}`;

    const url = searchUrl;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.meta.status !== 200) alert(json.meta.msg);
        setSearchGifs(json.data);
      })
      .catch((err) => {
        // offline, or some other error
        alert(err);
        setSearchGifs([]);
      });
  }, [searchTerm]);

  return (
    <div className="flex h-full w-full flex-col gap-8 overflow-auto bg-background p-10">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "trending" && <TrendingPage gifs={gifs} />}
      {tab === "search" && (
        <SearchPage
          inputState={inputState}
          setInputState={setInputState}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          gifs={searchGifs}
        />
      )}
      {tab === "about" && <AboutPage />}
    </div>
  );
};
