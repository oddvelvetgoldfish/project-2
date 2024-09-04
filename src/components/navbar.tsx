import { cn } from "../constants";

interface Props {
  tab: string;
  setTab: (tab: string) => void;
}
export const Navbar = ({ tab, setTab }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <div className="text-5xl">
        <strong>GIPHY</strong> Search API
      </div>
      <nav>
        <ul className="flex flex-col items-center gap-3 pt-6 sm:flex-row sm:gap-10 sm:pt-0">
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
  );
};
