import { IGif } from "@giphy/js-types";
import { GifGrid } from "../components/gif-grid";

interface Props {
  gifs: IGif[];
}
export const TrendingPage = ({ gifs }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Trending GIFs</h2>
      <GifGrid gifs={gifs} />
    </div>
  );
};
