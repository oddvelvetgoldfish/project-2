import { IGif } from "@giphy/js-types";
import { GifGrid } from "./components/gif-grid";
import { FaSearch } from "react-icons/fa";

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
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-0">
        <h2 className="text-2xl">Search{searchTerm && `: ${searchTerm}`}</h2>
        <div className="flex gap-2">
          <input
            type="search"
            className="w-full px-2 text-black sm:w-auto"
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
              if (e.target.value === "") {
                setSearchTerm("");
              }
            }}
          />
          <button
            className="flex h-8 items-center gap-1 rounded bg-blue-500 px-2 text-white"
            onClick={() => setSearchTerm(inputState)}
          >
            <FaSearch />
            <span className="hidden sm:block">Search</span>
          </button>
        </div>
      </div>
      <GifGrid gifs={gifs} />
    </div>
  );
};
