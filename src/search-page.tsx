import { IGif } from "@giphy/js-types";
import { GifGrid } from "./components/gif-grid";

type Props = {
  inputState: string;
  setInputState: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  gifs: IGif[];
};
export const SearchPage = ({
  inputState,
  setInputState,
  searchTerm,
  setSearchTerm,
  gifs,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl">Search{searchTerm && `: ${searchTerm}`}</h2>
        <div className="flex gap-2">
          <input
            type="search"
            className="px-2 text-black"
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
              if (e.target.value === "") {
                setSearchTerm("");
              }
            }}
          />
          <button
            className="rounded bg-blue-500 px-2 text-white"
            onClick={() => setSearchTerm(inputState)}
          >
            Search
          </button>
        </div>
      </div>
      <GifGrid gifs={gifs} />
    </div>
  );
};
