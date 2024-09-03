import { GifSquare } from "./components/gif-square";

export const Start = () => {
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
        <div className="grid w-full grid-cols-4 gap-4">
          <GifSquare />
          <GifSquare />
          <GifSquare />
          <GifSquare />
        </div>
      </div>
    </div>
  );
};
